import React from "react";
import Link from "next/link";

import Button from "../atoms/button";
import Stripe from "../atoms/stripe";
import DateMeta from "../atoms/date";
import Cover from "../atoms/cover";
import Title from "../atoms/title";
import styles from "../styles/hero.module.scss";

const Hero = ({ title, date, cover, excerpt, slug }) => {
    return (
        <section className={styles.section}>
            <div className={styles.head}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Stripe title="NEW STORY" />
                        <Title title={title} slug={slug} />
                        <DateMeta value={date} />
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
