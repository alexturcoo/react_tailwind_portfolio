import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-black text-gray-300 font-mono antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
