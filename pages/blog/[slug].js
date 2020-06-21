import React from "react";
import { useRouter } from "next/router";

import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/templates/layout";
import Block from "../../components/molecules/block";
import Stripe from "../../components/atoms/stripe";
import DateFormatter from "../../components/atoms/date-formatter";
import PostTile from "../../components/organisms/post-title";
import PostContent from "../../components/organisms/post-content";

const Post = ({ post }) => {
    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout title={post.title}>
            <PostTile>{post.title}</PostTile>
            <div className="wrapper my-2">
                <Stripe>
                    <DateFormatter value={post.date} />
                </Stripe>
                <PostContent content={post.content} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async ({ params }) => {
    const post = getPostBySlug(params.slug, ["title", "date", "slug", "content", "cover"]);
    const content = await markdownToHtml(post.content || "");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

export default Post;
