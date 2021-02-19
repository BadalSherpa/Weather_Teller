import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
