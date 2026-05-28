import type { Metadata } from "next";

const TARGET_URL = "https://wa.me/+79538057999";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function WhatsAppRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${TARGET_URL}`} />
      <link rel="canonical" href={TARGET_URL} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(TARGET_URL)});`,
        }}
      />
      <noscript>
        <a href={TARGET_URL}>Перейти в WhatsApp</a>
      </noscript>
    </>
  );
}

