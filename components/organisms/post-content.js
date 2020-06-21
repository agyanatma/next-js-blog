import React from "react";

import styles from "../styles/post.module.scss";

const PostContent = ({ content }) => {
    return (
        <div className={styles.body}>
            <div className={styles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostContent;
