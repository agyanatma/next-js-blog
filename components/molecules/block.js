import React from "react";

import styles from "../styles/block.module.scss";

const Block = (props) => {
    return <div className={[styles.wrapper, styles[props.type]].join(" ")}>{props.children}</div>;
};

export default Block;
