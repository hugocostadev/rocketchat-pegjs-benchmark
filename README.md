# Rocket.Chat | Message Parser Benchmark

This directory contains the benchmark suite that measures the speed of parsers generated by PEG.js used in [Rocket.Chat Message Parser](https://github.com/RocketChat/fuselage/tree/develop/packages/message-parser) on various messages inputs.

Its main goal is to provide data for code generator optimizations.

For each Pull Request is recommended to get the codes from `develop` and `Pull request branch`, and put it into a respective folder containing the PR code inside `/rocketchat`

It is needed to convert the code from the file [utils.ts](https://github.com/RocketChat/fuselage/tree/develop/packages/message-parser/src/utils.ts) to Javascript from both branches, since it is written in Typescript.

To convert the file to Javascript you can use this converter: https://extendsclass.com/typescript-to-javascript.html

After converting the code to Javascript, replace the import block from [grammar.pegjs](https://github.com/RocketChat/fuselage/tree/develop/packages/message-parser/src/grammar.pegjs) with the converted code.

In the `benchmarks.js` file add a new item in the array or replace the desired one to compare with develop:

```javascript
const benchmarks = [
    {
        id: "develop",
        title: "Develop Branch",
        tests: [ ...testFiles ],
    },
    {
        id: "grammar_PR{PULL_REQUEST_NUMBER}", //folder and file name inside the folder rocketchat/
        title: "PR #{PULL_REQUEST_NUMBER} - Author: {AUTHOR_NAME}",
        tests: [ ...testFiles ],
    },
];
```

If new messages scnenarios appears but it in the respective file inside `tests/` folder

To run the benchmark you need to run in the root of the repository:

```sh
npm run benchmark
```
