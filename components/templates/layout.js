import React from "react";
import Head from "next/head";

import styles from "../styles/layout.module.scss";
import Header from "../organisms/header";
import Footer from "../organisms/footer";

const Layout = ({ title, image, children }) => {
    const url = process.env.url;
    const titlePage = `${title || "Type Blog"} — Type Blog, A Blog with Newspaper Design`;
    const description = "This is my blog with Newspaper Design built with Next.js";
    const imagePage = image || "";

    return (
        <>
            <Head>
                <title>{titlePage}</title>
                <meta name="title" content={titlePage} />
                <meta name="description" content={description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={titlePage} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imagePage} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={titlePage} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={imagePage} />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
