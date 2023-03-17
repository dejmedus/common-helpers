#!/usr/bin/env node

const readlinePromises = require('node:readline/promises');

let command = process.argv[2]

const helpMessage = [
    'Options:\n',
    '  -b | --boilerplate  Generate HTML boilerplate\n',
    '  -c | --convert      Convert px to rem\n',
    '  -h | --help         Show help\n',
    '  -l | --lorem        Get lorem ipsum text\n',
    '  -r | --readme       Generate README.md\n',

    '\n',
    'Usage:\n',
    '  common --boilerplate\n',
    '  common --convert 64\n',
    '  common --lorem 2\n',
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
    else if (command == "--boilerplate" || command == '-b') {
        const boilerplate = require('./tools/boilerplate/boilerplate.js');
        boilerplate.generate();
    }
    else if (command == "--convert" || command == '-c') {
        let num = "";

        if (process.argv[3] !== undefined) {
            num = process.argv[3];
        }

        const rem = require('./tools/rem.js');
        rem.convert(num);
    }
    else if (command == "--lorem" || command == '-l') {
        let num = "";

        if (process.argv[3] !== undefined) {
            num = process.argv[3];
        }

        const getLorem = require('./tools/lorem.js');
        getLorem.lorem(num);
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

