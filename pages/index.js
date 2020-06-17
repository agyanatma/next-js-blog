import React from "react";
import Link from "next/link";

import Layout from "../components/layout";
import Block from "../components/block";
import Hero from "../components/hero";

const Index = () => {
    return (
        <Layout title="Home">
            <div className="my-2">
                <Block type="vertical">
                    <h1 className="title">Great Times to Read Somethings</h1>
                    <p className="subtitle">
                        Hello, I’am John Doe. I like to write something about nature in all around
                        globe.
                    </p>
                </Block>
            </div>
            <div className="wrapper">
                <Hero />
                <h1>Hello World</h1>
            </div>
        </Layout>
    );
};

export default Index;
