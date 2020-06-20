import React from "react";

import { getAllPosts } from "../lib/api";

import Layout from "../components/templates/layout";
import Block from "../components/molecules/block";
import Hero from "../components/organisms/hero";
import Stripe from "../components/atoms/stripe";
import Post from "../components/organisms/post";

const Index = ({ allPosts }) => {
    const lastest = allPosts[0];
    const posts = allPosts.slice(1);

    const first_post = {
        title: "I’am Traveling to The Greatest Mountain.",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Auctor elit sed vulputate mi sit. Faucibus purus in massa tempor. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Lectus arcu bibendum at varius vel pharetra vel turpis. Duis tristique sollicitudin nibh sit amet commodo. Adipiscing commodo elit at imperdiet dui. Suscipit adipiscing bibendum est ultricies integer.At in tellus integer feugiat scelerisque varius morbi enim nunc. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Dignissim sodales ut eu sem integer vitae justo eget. Hendrerit dolor magna eget est lorem. Diam volutpat commodo sed egestas egestas. Platea dictumst vestibulum rhoncus est pellentesque elit. Pellentesque sit amet porttitor eget dolor morbi. Mauris pharetra et ultrices neque ornare. Sollicitudin nibh sit amet commodo.",
        date: "Wednesday, 24th January 2020",
        category: "TODAY POST",
        srcImage: "/assets/posts/first-post/post-1.jpg",
        altImage: "post-1",
        slug: "hey",
    };
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
                <Hero
                    title={lastest.title}
                    excerpt={lastest.excerpt}
                    date={lastest.date}
                    cover={lastest.cover}
                    slug={lastest.slug}
                />
                <div className="my-5">
                    <Stripe title="MORE STORIES" />
                </div>
                <Post
                    title={lastest.title}
                    excerpt={lastest.excerpt}
                    date={lastest.date}
                    cover={lastest.cover}
                    slug={lastest.slug}
                />
                <Post
                    title={lastest.title}
                    excerpt={lastest.excerpt}
                    date={lastest.date}
                    cover={lastest.cover}
                    slug={lastest.slug}
                />
                <Post
                    title={lastest.title}
                    excerpt={lastest.excerpt}
                    date={lastest.date}
                    cover={lastest.cover}
                    slug={lastest.slug}
                />
                <Post
                    title={lastest.title}
                    excerpt={lastest.excerpt}
                    date={lastest.date}
                    cover={lastest.cover}
                    slug={lastest.slug}
                />
            </div>
        </Layout>
    );
};

export default Index;

export async function getStaticProps() {
    const allPosts = getAllPosts(["title", "date", "slug", "cover", "excerpt"]);

    return {
        props: { allPosts },
    };
}
