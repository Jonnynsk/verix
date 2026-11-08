import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

interface HubItem {
  docType: string;
  categorySlug: string;
  url: string;
  title: string;
  h1: string;
  description?: string;
  tier: 'tier1' | 'tier2';
  seoHtmlText?: string;
  hubVinitelny?: string;
  hubRoditelny?: string;
  [key: string]: any;
}

interface ProductItem {
  docType: string;
  categorySlug: string;
  url: string;
  name: string;
  code?: string;
  price?: string | number;
  [key: string]: any;
}

function parseExcel() {
  const rootDir = process.cwd();
  const excelPathTexts = path.join(rootDir, 'seo_structure_with_texts.xlsx');
  const excelPathFinal = path.join(rootDir, 'seo_structure_final.xlsx');
  const dataDir = path.join(rootDir, 'src', 'data');

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const hubs: HubItem[] = [];
  const products: ProductItem[] = [];

  function parseUrlSlug(urlStr: string) {
    if (!urlStr) return { docType: '', categorySlug: '' };
    let clean = String(urlStr).trim();
    try {
      if (clean.startsWith('http://') || clean.startsWith('https://')) {
        const parsedUrl = new URL(clean);
        clean = parsedUrl.pathname;
      }
    } catch (e) {
      // ignore
    }
    const parts = clean.split('/').filter(Boolean);
    const docType = parts[0] || '';
    const categorySlug = parts[1] || parts[parts.length - 1] || '';
    return { docType, categorySlug };
  }

  function findVal(row: any, keywords: string[]): string {
    const keys = Object.keys(row);
    for (const kw of keywords) {
      const foundKey = keys.find((k) => k.toLowerCase().includes(kw.toLowerCase()));
      if (foundKey && row[foundKey] !== undefined && row[foundKey] !== null && String(row[foundKey]).trim() !== '') {
        return String(row[foundKey]).trim();
      }
    }
    return '';
  }

  let wbTexts: XLSX.WorkBook | null = null;
  if (fs.existsSync(excelPathTexts)) {
    wbTexts = XLSX.readFile(excelPathTexts);
  }
  let wbFinal: XLSX.WorkBook | null = null;
  if (fs.existsSync(excelPathFinal)) {
    wbFinal = XLSX.readFile(excelPathFinal);
  }

  // Parse Tier 2
  const tier2Sheet = wbTexts?.Sheets['Tier2_Глубокие_Хабы'] || wbFinal?.Sheets['Tier2_Глубокие_Хабы'];
  if (tier2Sheet) {
    const sheetData = XLSX.utils.sheet_to_json<any>(tier2Sheet);
    sheetData.forEach((row) => {
      const url = findVal(row, ['url', 'путь', 'ссылк']);
      const { docType, categorySlug } = parseUrlSlug(url);
      const title = findVal(row, ['title', 'тайтл', 'мета']);
      const h1 = findVal(row, ['h1', 'заголовок']);
      const seoHtmlText = findVal(row, ['seo_html_текст', 'seo_html', 'html_текст', 'seo_html_text']);

      const hubVinitelny = findVal(row, ['хаб_винительный', 'hub_vinitelny', 'винительн']) || row['Хаб_Винительный'] || row['хаб_винительный'] || '';
      const hubRoditelny = findVal(row, ['хаб_родительный', 'hub_roditelny', 'родительн']) || row['Хаб_Родительный'] || row['хаб_родительный'] || '';

      let finalH1 = h1 || title || categorySlug;
      if (hubVinitelny && finalH1.includes(' на ')) {
        const parts = finalH1.split(' на ');
        if (parts.length > 1) {
          finalH1 = `${parts[0]} на ${hubVinitelny.toLowerCase()} для маркетплейсов`;
        }
      }

      let finalSeoHtmlText = seoHtmlText || row['SEO_HTML_Текст'] || row['seo_html_текст'] || '';
      if (finalSeoHtmlText && hubRoditelny) {
        finalSeoHtmlText = finalSeoHtmlText.replace(
          /Правила продажи для\s+[«"]?[^»"]+[»"]?/g,
          `Правила продажи для «${hubRoditelny.toLowerCase()}»`
        );
      }

      if (docType && categorySlug) {
        hubs.push({
          ...row,
          docType,
          categorySlug,
          url,
          title: title || finalH1,
          h1: finalH1,
          seoHtmlText: finalSeoHtmlText,
          hubVinitelny,
          hubRoditelny,
          tier: 'tier2',
        });
      }
    });
  }

  // Parse Tier 1
  const tier1Sheet = wbTexts?.Sheets['Tier1_Сборные_Хабы'] || wbFinal?.Sheets['Tier1_Сборные_Хабы'];
  if (tier1Sheet) {
    const sheetData = XLSX.utils.sheet_to_json<any>(tier1Sheet);
    sheetData.forEach((row) => {
      const url = findVal(row, ['url', 'путь', 'ссылк']);
      const { docType, categorySlug } = parseUrlSlug(url);
      const title = findVal(row, ['title', 'тайтл', 'мета']);
      const h1 = findVal(row, ['h1', 'заголовок']);
      const seoHtmlText = findVal(row, ['seo_html_текст', 'seo_html', 'html_текст', 'seo_html_text']);

      if (docType && categorySlug) {
        hubs.push({
          ...row,
          docType,
          categorySlug,
          url,
          title: title || h1,
          h1: h1 || title || categorySlug,
          seoHtmlText: seoHtmlText || row['SEO_HTML_Текст'] || row['seo_html_текст'] || '',
          tier: 'tier1',
        });
      }
    });
  }

  // Parse Products
  const productsSheet = wbTexts?.Sheets['Товары_Для_Таблиц'] || wbFinal?.Sheets['Товары_Для_Таблиц'];
  if (productsSheet) {
    const sheetData = XLSX.utils.sheet_to_json<any>(productsSheet);
    sheetData.forEach((row) => {
      const url = findVal(row, ['url', 'путь', 'ссылк']);
      const { docType, categorySlug } = parseUrlSlug(url);
      const name = findVal(row, ['тип товара', 'назван', 'товар', 'продукт', 'наименован']);
      const code = findVal(row, ['код', 'окпд', 'тнвэд', 'code']);
      const price = findVal(row, ['цен', 'стоимост', 'price']);
      const documents = findVal(row, ['документ', 'documents']);

      if (docType && categorySlug && name) {
        products.push({
          ...row,
          docType,
          categorySlug,
          url,
          name,
          code,
          price,
          documents,
        });
      }
    });
  }

  fs.writeFileSync(path.join(dataDir, 'hubs.json'), JSON.stringify(hubs, null, 2), 'utf-8');
  fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(products, null, 2), 'utf-8');
  console.log(`Successfully converted Excel to JSON: ${hubs.length} valid hubs, ${products.length} valid products saved to src/data/`);
}

parseExcel();
