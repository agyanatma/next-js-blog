import remark from "remark";
import html from "remark-html";
import hightlight from "remark-highlight.js";

export default async function markdownToHtml(markdown) {
    const result = await remark().use(hightlight).use(html).process(markdown);
    return result.toString();
}
