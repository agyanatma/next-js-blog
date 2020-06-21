import React from "react";
import Link from "next/link";

const Title = ({ title, slug }) => {
    return (
        <h1>
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <a>{title}</a>
            </Link>
        </h1>
    );
};

export default Title;
