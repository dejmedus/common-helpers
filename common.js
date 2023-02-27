#!/usr/bin/env node

const readlinePromises = require('node:readline/promises');


let command = process.argv[2]

const helpMessage = [
    'Options:\n',
    '  -r | --readme    Generate README.md\n',
    '  -h | --help      Show help\n',
    '\n',
    'Usage:\n',
    '  common --readme "project name"\n',
    '  common --help\n',
].join("")

if (command != null) {
    command = command.toLowerCase();

    if (command == "--help" || command == '-h') {
        console.log('Common Helpers\n');
        console.log(helpMessage);
    }
    else if (command == "--readme" || command == '-r') {
        (async () => {
            let repoName = "";
            const rl = readlinePromises.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            if (process.argv[3] !== undefined) {
                repoName = process.argv[3];
            }
            else {
                repoName = await rl.question('What is the projects name?    ');
                rl.close();
            }

            const readme = require('./tools/generate-readme.js');
            readme.generate(repoName);
        })()
    }
    else {
        console.log("\nPlease use a valid command\n");
        console.log(helpMessage);
    }
    return
}
else {
    console.log(helpMessage)
}

