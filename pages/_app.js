import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link
          rel="icon"
          href="/assets/nike-4-logo-orange.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <title>EQUINOX ANDINA 2024</title>
        <meta name="descrption" content="Nike masplay 2024 - Chile - Perú" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
