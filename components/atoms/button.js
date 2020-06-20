import React from "react";

import styles from "../styles/button.module.scss";

const Button = React.forwardRef((props, ref) => {
    return (
        <a
            onClick={props.onClick}
            href={props.href}
            ref={ref}
            className={[styles.btn, styles[props.type]].join(" ")}
        >
            {props.children}
        </a>
    );
});

export default Button;
