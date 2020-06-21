import React from "react";
import Link from "next/link";

import Button from "../atoms/button";
import Stripe from "../atoms/stripe";
import Meta from "../atoms/meta";
import Cover from "../atoms/cover";
import Title from "../atoms/title";
import styles from "../styles/hero.module.scss";

const Hero = ({ title, date, cover, excerpt, slug }) => {
    return (
        <section className={styles.section}>
            <div className={styles.head}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Stripe>NEW STORY</Stripe>
                        <Title
                            title={title.length > 50 ? title.substring(0, 60) + "..." : title}
                            slug={slug}
                        />
                        <Meta date={date} />
                        <hr />
                    </div>
                    <p className={styles.excerpt}>{excerpt.substring(0, 300) + "..."}</p>
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
        </section>
    );
};

export default Hero;
