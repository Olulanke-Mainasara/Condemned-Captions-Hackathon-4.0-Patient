import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="min-h-screen dark">
      <Head />
      <body className="bg-[#F8FFFE] dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
