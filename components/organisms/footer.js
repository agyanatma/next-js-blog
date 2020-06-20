import React, { useState } from "react";

import Button from "../atoms/button";
import Block from "../molecules/block";
import styles from "../styles/footer.module.scss";

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
            <Block type="horizontal">
                <div className={styles.content}>
                    <div className={styles.tagline}>
                        <h1>Newsletter</h1>
                        <p>Subscribe my blog if you don’t want to miss my story.</p>
                    </div>
                    <form className={styles.form} onSubmit={() => alert("Submitted!")}>
                        <label>Email address</label>
                        <input type="email" name="email" value={email} onChange={handleChange} />
                        <Button onClick={handleClicked} type="primary">
                            Send Email
                        </Button>
                    </form>
                </div>
            </Block>
            <div className={styles.bottom}>
                <p>Copyright © 2020. Agyan Atma</p>
            </div>
        </footer>
    );
};

export default Footer;
