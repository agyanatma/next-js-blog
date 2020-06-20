import React from "react";

import styles from "../styles/stripe.module.scss";

const Stripe = (props) => {
    return (
        <div className={styles.stripe}>
            <p>{props.title}</p>
        </div>
    );
};

export default Stripe;
