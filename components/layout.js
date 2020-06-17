import React from "react";
import Head from "next/head";

import styles from "./styles/layout.module.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
    const url = process.env.url;
    const title = `${props.title || "Type Blog"} — Type Blog, A Blog with Newspaper Design`;
    const description = "This is my blog with Newspaper Design built with Next.js";
    const image = "";

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
            </Head>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
