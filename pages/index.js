import React from "react";

import { getAllPosts } from "../lib/api";

import Layout from "../components/templates/layout";
import Block from "../components/molecules/block";
import Hero from "../components/organisms/hero";
import Stripe from "../components/atoms/stripe";
import MorePost from "../components/organisms/more-post";

const Index = ({ allPosts }) => {
    const lastest = allPosts[0];
    const posts = allPosts.slice(1);

    return (
        <Layout title="Home">
            <Block type="vertical" addMargin={true}>
                <h1 className="title">Great Times to Read Somethings</h1>
                <p className="subtitle">
                    Hello, I’am John Doe. I like to write something about nature in all around
                    globe.
                </p>
            </Block>
            <div className="wrapper">
                <Hero
                    title={lastest.title}
                    excerpt={lastest.excerpt}
                    date={lastest.date}
                    cover={lastest.cover}
                    slug={lastest.slug}
                />
                <div className="my-5">
                    <Stripe gap={true}>MORE STORIES</Stripe>
                </div>
                {posts.map((post) => {
                    return (
                        <MorePost
                            key={post.slug}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            cover={post.cover}
                            slug={post.slug}
                        />
                    );
                })}
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const allPosts = getAllPosts(["title", "date", "slug", "cover", "excerpt"]);

    return {
        props: { allPosts },
    };
};

export default Index;
