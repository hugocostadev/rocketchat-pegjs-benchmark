"use strict";

const testFiles = [
    { file: "markdown.md", title: "📁 markdown.md" },
    { file: "any.md", title: "📁 any.md" },
    { file: "blockquotes.md", title: "📁 blockquotes.md" },
    { file: "codeFence.md", title: "📁 codeFence.md" },
    { file: "color.md", title: "📁 color.md" },
    { file: "email.md", title: "📁 email.md" },
    { file: "emoji.md", title: "📁 emoji.md" },
    { file: "emoticons.md", title: "📁 emoticons.md" },
    { file: "emphasis.md", title: "📁 emphasis.md" },
    { file: "escaped.md", title: "📁 escaped.md" },
    { file: "heading.md", title: "📁 heading.md" },
    { file: "image.md", title: "📁 image.md" },
    { file: "inlineCode.md", title: "📁 lineCode.md" },
    { file: "katex.md", title: "📁 katex.md" },
    { file: "lineBreak.md", title: "📁 lineBreak.md" },
    { file: "mention.md", title: "📁 mention.md" },
    { file: "orderedList.md", title: "📁 orderedList.md" },
    { file: "phoneNumber.md", title: "📁 phoneNumber.md" },
    { file: "strikethrough.md", title: "📁 strikethrough.md" },
    { file: "strongEmphasis.md", title: "📁 strongEmphasis.md" },
    { file: "tasks.md", title: "📁 tasks.md" },
    { file: "unorderedList.md", title: "📁 unorderedList.md" },
    { file: "url.md", title: "📁 url.md" },
];

const benchmarks = [
    {
        id: "develop",
        title: "Develop Branch",
        tests: [ ...testFiles ],
    },
    {
        id: "grammar_PR_Refactor",
        title: "PR Refactor - Author: Hugo",
        tests: [ ...testFiles ],
    },
];

module.exports = benchmarks;
