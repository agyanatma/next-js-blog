import React from "react";

import styles from "../styles/stripe.module.scss";

const Stripe = ({ children, gap }) => {
    return (
        <div className={[styles.stripe, styles[gap == true ? "gap" : ""]].join(" ")}>
            <p>{children}</p>
        </div>
    );
};

export default Stripe;
