import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "@fontsource/inter";
import ClientProvider from "../providers/ClientProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClientProvider>
  );
}

export default MyApp;
