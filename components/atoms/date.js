import React from "react";
import { parseISO, format } from "date-fns";

import styles from "../styles/date.module.scss";

const DateMeta = ({ value }) => {
    const date = parseISO(value);
    return (
        <div className={styles.meta}>
            <p>{format(date, "LLLL  d, yyyy")}</p>
            <hr />
        </div>
    );
};

export default DateMeta;
