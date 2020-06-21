import React from "react";
import Block from "../molecules/block";
import styles from "../styles/post.module.scss";

const PostTile = ({ children }) => {
    return (
        <Block addMargin={true}>
            <h1 className={styles.postTitle}>{children}</h1>
        </Block>
    );
};

export default PostTile;
