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
          href="#"
          type="image/<generated>"
          sizes="<generated>"
        />
        <title>Nike | masplay</title>
        <meta name="descrption" content="" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
