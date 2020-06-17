import React from "react";

import styles from "./styles/date.module.scss";

const DateMeta = (props) => {
    return (
        <div className={styles.meta}>
            <p>{props.value}</p>
            <hr />
        </div>
    );
};

export default DateMeta;
