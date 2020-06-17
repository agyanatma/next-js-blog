import React from "react";

import styles from "./button.module.scss";

const Button = (props) => {
    return (
        <button onClick={props.onClicked} className={[styles.btn, styles[props.type]].join(" ")}>
            {props.children}
        </button>
    );
};

export default Button;
