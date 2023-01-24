import type { AppProps } from "next/app";
import { LayoutSearch } from "../components/Layout";
import ThemeProvider from "../providers/ThemeProvider";
import "../styles/globals.css";
import "@fontsource/inter";
import WalletProvider from "../providers/WalletProvider";
import CosmWasmProvider from "../providers/CosmWasmProvider";
import { Toaster } from "react-hot-toast";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || LayoutSearch;

  return (
    <ThemeProvider>
      <WalletProvider>
        <CosmWasmProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster position="top-right" />
        </CosmWasmProvider>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default MyApp;
