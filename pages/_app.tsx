import type { AppProps } from "next/app";
import { LayoutSearch } from "../components/Layout";
import ClientProvider from "../providers/ClientProvider";
import "../styles/globals.css";
import "@fontsource/inter";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || LayoutSearch;

  return (
    <ClientProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClientProvider>
  );
}

export default MyApp;
