import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import createEmotionServer from "create-emotion-server";
import { cache } from "./_app";
import config from "../config";

const { extractCritical } = createEmotionServer(cache);

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* 
          Insert Google Analytics code here
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZBHF9696V"></script>
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-NZBHF9696V');`
          }} /> */}
                    {/* PWA primary color */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body style={{ background: config.PALETTE.BACKGROUND_PRIMARY }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
            <style
                key="emotion-style-tag"
                data-emotion-css={styles.ids.join(" ")}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: styles.css }}
            />,
        ],
    };
    // return {
    //   ...initialProps,
    //   // Styles fragment is rendered after the app and page rendering finish.
    //   styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    // };
};
