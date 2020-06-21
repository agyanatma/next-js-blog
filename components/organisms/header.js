import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/header.module.scss";

const Header = () => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Link href="/">
                        <a>
                            <h3 className={styles.logo}>Type Blog</h3>
                        </a>
                    </Link>
                    <nav className={styles.navigation}>
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
                    <div className={styles.menu}>
                        <img src="/assets/menu.svg" alt="menu-icon" />
                    </div>
                </div>
                <hr className={styles.stripe} />
            </div>
        </header>
    );
};

export default Header;
