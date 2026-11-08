"use client";

import { useState, useMemo } from "react";
import styles from "./ProductsTable.module.scss";

interface Product {
  name: string;
  documents?: string;
  [key: string]: any;
}

interface ProductsTableProps {
  products: Product[];
  categoryTitle: string;
}

export function ProductsTable({ products, categoryTitle }: ProductsTableProps) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter((p) => p.name?.toLowerCase().includes(q));
  }, [products, search]);

  return (
    <section
      className={styles.section}
      aria-labelledby="products-table-heading"
    >
      <div className={styles.section__inner}>
        <div className={styles.section__header}>
          <h2 id="products-table-heading" className={styles.section__title}>
            Перечень продукции ({filteredProducts.length})
          </h2>

          <div className={styles.section__searchWrapper}>
            <svg
              className={styles.section__searchIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35"
              />
            </svg>
            <input
              type="text"
              className={styles.section__searchInput}
              placeholder="Поиск по наименованию..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Поиск по наименованию продукции"
            />
          </div>
        </div>

        <div className={styles.section__tableContainer}>
          {filteredProducts.length === 0 ? (
            <div className={styles.section__empty}>
              По вашему запросу ничего не найдено. Попробуйте изменить параметры
              поиска.
            </div>
          ) : (
            <table className={styles.section__table}>
              <thead>
                <tr>
                  <th style={{ width: "60px" }}>№</th>
                  <th>Наименование продукции</th>
                  <th>Требуемый документ</th>
                  <th style={{ width: "150px", textAlign: "center" }}>Заявка</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ fontWeight: 500, color: "#0f172a" }}>
                      {product.name}
                    </td>
                    <td>{product.documents || product["Документы"] || "—"}</td>
                    <td style={{ textAlign: "center" }}>
                      <a href="#social-consult" className={styles.section__button}>
                        Оформить
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
