import React, { useState } from "react";

import Button from "../components/button";
import styles from "./footer.module.scss";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };

    const handleClicked = (e) => {
        e.preventDefault();
        alert("Email sent!");
    };

    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.tagline}>
                        <h1>Newsletter</h1>
                        <p>Subscribe my blog if you don’t want to miss my story.</p>
                    </div>
                    <form className={styles.form} onSubmit={() => alert("Submitted!")}>
                        <label>Email address</label>
                        <input type="email" value={email} onChange={handleChange} />
                        <Button onClicked={handleClicked} type="primary">
                            Send Email
                        </Button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
