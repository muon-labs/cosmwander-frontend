import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import AppProvider from "~/providers/AppProvider";

import Layout from "~/components/Layout";

import "../styles/globals.css";
import "@fontsource/inter";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="top-right" />
    </AppProvider>
  );
}

export default MyApp;
