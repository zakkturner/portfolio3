import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../com/layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Zach Turner | Front End Developer</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Interactive Front End Developer, Based in Atlanta GA. Specializes in responsive, beautiful web development and sleek animations."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
