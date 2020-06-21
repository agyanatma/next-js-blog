import React from "react";

import styles from "../styles/block.module.scss";

const Block = (props) => {
    return (
        <div
            className={[
                styles.wrapper,
                styles[props.type],
                styles[props.addMargin == true && "margin"],
            ].join(" ")}
        >
            {props.children}
        </div>
    );
};

export default Block;
