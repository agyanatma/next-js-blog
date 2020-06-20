import React from "react";
import Link from "next/link";

const Cover = ({ title, slug, src }) => {
    const image = <img src={src} alt={`Cover for ${title}`} />;

    return (
        <>
            {slug ? (
                <Link as={`/blog/${slug}`} href="/blog/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </>
    );
};

export default Cover;
