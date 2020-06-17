import React from "react";

import Button from "./button";
import Category from "./category";
import DateMeta from "./date";
import styles from "./styles/hero.module.scss";

const Hero = (props) => {
    const data =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Auctor elit sed vulputate mi sit. Faucibus purus in massa tempor. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Lectus arcu bibendum at varius vel pharetra vel turpis. Duis tristique sollicitudin nibh sit amet commodo. Adipiscing commodo elit at imperdiet dui. Suscipit adipiscing bibendum est ultricies integer.At in tellus integer feugiat scelerisque varius morbi enim nunc. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Dignissim sodales ut eu sem integer vitae justo eget. Hendrerit dolor magna eget est lorem. Diam volutpat commodo sed egestas egestas. Platea dictumst vestibulum rhoncus est pellentesque elit. Pellentesque sit amet porttitor eget dolor morbi. Mauris pharetra et ultrices neque ornare. Sollicitudin nibh sit amet commodo.";

    console.log(data.length);
    return (
        <section>
            <div className={styles.head}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Category title="TODAY POST" />
                        <h1>I’am Traveling to The Greatest Mountain.</h1>
                    </div>
                    <DateMeta value="Wednesday, 24th January 2020" />
                </div>
                <div className={styles.image}>
                    <img src="/assets/posts/first-post/post-1.jpg" alt="post1 image" />
                </div>
            </div>
            <p className={styles.excerpt}>{data.substring(0, 810) + "..."}</p>
            <div className={styles.button}>
                <Button type="secondary">Read More</Button>
            </div>
        </section>
    );
};

export default Hero;
