import React from "react";
import Link from "next/link";

const Title = ({ title, slug }) => {
    return (
        <h1>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a>{title.length > 50 ? title.substring(0, 50) + "..." : title}</a>
            </Link>
        </h1>
    );
};

export default Title;
