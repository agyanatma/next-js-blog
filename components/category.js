import React from "react";

import styles from "./styles/category.module.scss";

const Category = (props) => {
    return (
        <div className={styles.category}>
            <p>{props.title}</p>
        </div>
    );
};

export default Category;
