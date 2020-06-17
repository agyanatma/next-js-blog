import React from "react";
import Link from "next/link";

import Layout from "../components/layout";

const Index = () => {
    return (
        <Layout>
            <h1>Hello World</h1>
            <Link href="/blog/[slug]" as={`blog/slugger`}>
                <a>Go To Blog</a>
            </Link>
        </Layout>
    );
};

export default Index;
