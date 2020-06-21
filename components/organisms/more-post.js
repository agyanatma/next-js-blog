import React from "react";
import Link from "next/link";

import Button from "../atoms/button";
import Meta from "../atoms/meta";
import Cover from "../atoms/cover";
import Title from "../atoms/title";
import styles from "../styles/post.module.scss";

const MorePosts = ({ title, date, cover, excerpt, slug }) => {
    return (
        <div className={styles.section}>
            <div className={styles.head}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Title title={title} slug={slug} />
                        <Meta date={date} />
                        <hr />
                    </div>
                    <p className={styles.excerpt}>{excerpt.substring(0, 620) + "..."}</p>
                    <div className={styles.button}>
                        <Link href="/blog/[slug]" as={`/blog/${slug}`} passHref>
                            <Button type="secondary">Read More</Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.image}>
                    <Cover title={title} src={cover} slug={slug} />
                </div>
            </div>
        </div>
    );
};

export default MorePosts;
