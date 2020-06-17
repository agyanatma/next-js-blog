import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div>
            <header>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.logo}>Type Blog</h3>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/" as={`/`}>
                                        <a>HOME</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" as={`/about`}>
                                        <a>ABOUT</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" as={`/blog`}>
                                        <a>BLOG</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" as={`/contact`}>
                                        <a>CONTACT</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <hr className={styles.stripe} />
                </div>
            </header>
        </div>
    );
};

export default Header;
