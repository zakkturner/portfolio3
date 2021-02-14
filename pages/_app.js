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
        <title>
          Fullpage Javascript Navigation HOC with React Awesome Slider
        </title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Fullpage navigation HOC with 3D animated transitions built on top of React Awesome Slider. GatsbyJS and NextJS recipes available."
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
