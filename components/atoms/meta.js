import React from "react";

import DateFormatter from "./date-formatter";
import styles from "../styles/meta.module.scss";

const Meta = ({ date }) => {
    return (
        <div className={styles.meta}>
            <DateFormatter value={date} />
        </div>
    );
};

export default Meta;
