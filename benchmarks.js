"use strict";

const testFiles = [
    { file: "markdown.md", title: "File: markdown.md" },
    { file: "any.md", title: "File: any.md" },
    { file: "blockquotes.md", title: "File: blockquotes.md" },
    { file: "codeFence.md", title: "File: codeFence.md" },
    { file: "color.md", title: "File: color.md" },
    { file: "email.md", title: "File: email.md" },
    { file: "emoji.md", title: "File: emoji.md" },
    { file: "emoticons.md", title: "File: emoticons.md" },
    { file: "emphasis.md", title: "File: emphasis.md" },
    { file: "escaped.md", title: "File: escaped.md" },
    { file: "heading.md", title: "File: heading.md" },
    { file: "image.md", title: "File: image.md" },
    { file: "inlineCode.md", title: "File: lineCode.md" },
    { file: "katex.md", title: "File: katex.md" },
    { file: "lineBreak.md", title: "File: lineBreak.md" },
    { file: "mention.md", title: "File: mention.md" },
    { file: "orderedList.md", title: "File: orderedList.md" },
    { file: "phoneNumber.md", title: "File: phoneNumber.md" },
    { file: "strikethrough.md", title: "File: strikethrough.md" },
    { file: "strongEmphasis.md", title: "File: strongEmphasis.md" },
    { file: "tasks.md", title: "File: tasks.md" },
    { file: "unorderedList.md", title: "File: unorderedList.md" },
    { file: "url.md", title: "File: url.md" },
];

const benchmarks = [

    {
        id: "develop",
        title: "Develop Branch",
        tests: [ ...testFiles ],
    },
    {
        id: "grammar_PR736",
        title: "PR #736 - Author: Hugo",
        tests: [ ...testFiles ],
    },
];

module.exports = benchmarks;
