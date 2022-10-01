import React, { Component, FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import theme from '../src/theme'
import { ThemeProvider } from '@material-ui/styles'
import AOS from 'aos'
import Head from 'next/head'
import config from '../config'
import 'aos/dist/aos.css'
import '../styles/globals.css'

export const cache = createCache()

function MyApp ({
  Component,
  pageProps
}: {
  Component: FunctionComponent
  pageProps: object
}) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }

    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={config.TWITTER_URL} />
        <meta name='twitter:title' content={config.META.TITLE} />
        <meta name='twitter:description' content={config.META.DESCRIPTION} />
        <meta name='twitter:image' content={config.META.IMAGE} />
        <meta property='og:image' content={config.META.IMAGE} />
        <meta property='og:title' content={config.META.TITLE} />
        <meta property='og:description' content={config.META.DESCRIPTION} />
        <meta property='og:url' content={config.COMPANY_URL} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
