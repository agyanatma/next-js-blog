import React from "react";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Type Blog</title>
                <meta property="og:title" content="Type Blog" key="title" />
            </Head>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
