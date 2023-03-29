#!/usr/bin/env node
import chalk from "chalk";
// @ts-ignore
import midjourney from "midjourney-client";
import open from "open";

(async () => {
    const [_, __, ...prompt] = process.argv;

    const promptString = prompt.join(" ");

    // eslint-disable-next-line no-console
    console.log(`
--------------------------------
        OPENJOURNEY AI
--------------------------------`);

    // eslint-disable-next-line no-console
    console.log(
        `⚡️ Generateing Openjourney image...\n💬 Prompt: ${
            promptString
                ? chalk.bold.blue(promptString)
                : chalk.bold.red("No prompt provided.")
        }\n`
    );

    const [result] = await midjourney(promptString);

    // eslint-disable-next-line no-console
    console.log(`🚀 Generation success! \n🔗 ${result}`);

    // eslint-disable-next-line no-console
    console.log(`🌐 Opening result in browser...\n\n`);

    open(result);
})();
