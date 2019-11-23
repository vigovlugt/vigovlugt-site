import React from "react";
import App from "next/app";
import Layout from "../components/layout/Layout";
import { AppContext } from "../contexts/AppContext";

class MyApp extends App<{}, {}, { nameColor: string }> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  constructor(props) {
    super(props);
    this.state = {
      nameColor: "#30e3ca"
    };
    this.setNameColor = this.setNameColor.bind(this);
  }

  setNameColor(c) {
    this.setState({ nameColor: c });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider
        value={{
          nameColor: this.state.nameColor,
          setNameColor: this.setNameColor
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    );
  }
}

export default MyApp;
