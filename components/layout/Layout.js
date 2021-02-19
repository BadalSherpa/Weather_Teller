import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        {/* <link rel='icon' type='image' href='../../fevicon.ico' /> */}
        <title>Weather-Teller</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
