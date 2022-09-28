import React from "react";
import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Signagewala - App</title>
          <meta
            name="description"
            content="Manage your retail branding and brand signages, all at one place"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Script
          src="https://kit.fontawesome.com/e0d2e0c039.js"
          crossorigin="anonymous"
        ></Script>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
