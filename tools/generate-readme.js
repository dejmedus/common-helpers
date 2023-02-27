#!/usr/bin/env node

const { writeFile } = require('node:fs/promises');

async function generate(repoName, dependencyList) {
    const filename = repoName.toUpperCase().trim().replace(" ", '-');
    const runCommand = dependencyList !== null ? dependencyList.filter(a => dependencyKey[a].command !== null) : "";
    const commandString = runCommand !== "" ? [
        '```shell',
        `${runCommand}`,
        '```',
    ] : "";


    try {
        await writeFile(`./${filename}-README.md`, [
            `# ${repoName}`,
            '\n',
            '## Built with',
            '\n',
            '## Local Development Setup\n',
            `1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) ${repoName}.`,
            `2. [Create a local clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) of the forked repository.`,
            `3. Using the terminal, move into your local copy\n`,
            '```shell',
            `cd ${repoName}`,
            '```',
            `4. Run the app\n`,
            `${commandString}`,
            '\n',
            '## Contributing',
            '1. Create a new branch',
            '```shell',
            `git checkout -b 'your-branch-name'`,
            '```',
            `2. Make changes.`,
            `3. Push your branch to the upstream repo`,
            '```shell',
            `git push origin your-branch-name`,
            '```',
            '🎉 Follow the link provided to create a pull request',
            '\n',
            '## Screenshots'

        ].join("\n")
        )
        console.log("Created README.md\n");
    }
    catch (err) {
        console.error("Could not create README.md", err);
    }
}

module.exports.generate = generate;

const dependencyKey = {
    flask: {
        name: 'Flask',
        link: 'https://flask.palletsprojects.com/en/',
        desc: 'a python web framework',
        command: 'flask --debug run'
    },
    jinja: {
        name: 'Jinja',
        link: 'https://palletsprojects.com/p/jinja/',
        desc: 'template engine'
    },
    sqlite: {
        name: 'SQLite',
        link: 'https://www.sqlite.org/index.html',
        desc: 'SQL database'
    },
    python3: {
        name: 'Python 3',
        link: 'https://www.python.org/downloads/',
        desc: 'language'
    }
}
