#!/usr/bin/env node

const { writeFile, readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function generate(repoName) {
    let filePath;
    try {
        if (resolve('./package.json') !== null) {
            filePath = resolve('./package.json');
        }
        else if (resolve('./requirements.txt')) {
            filePath = resolve('./requirements.txt');
        }
    }
    catch (err) {
        console.log("Cant find a dependencies file");
    }

    let readmeDeps = [];
    let runCommand = '';

    if (filePath !== null) {
        try {
            const contents = await readFile(filePath, { encoding: 'utf8' });
            const dependencyKeyList = Object.keys(dependencyKey);

            if (filePath.endsWith('.json')) {
                const packageFile = JSON.parse(contents);
                let dependencies = [...Object.keys(packageFile.dependencies), ...Object.keys(packageFile.devDependencies)];

                // clean up dependency list
                for (let i = 0; i < dependencies.length; i++) {
                    dependencies[i] = dependencies[i].split("/")
                    dependencies[i] = dependencies[i][0].replace("@", "");
                }
                dependencies = [...new Set(dependencies)];

                //
                for (let i = 0; i < dependencies.length; i++) {
                    if (dependencyKeyList.includes(dependencies[i])) {
                        readmeDeps.push(`- [${dependencyKey[dependencies[i]].name}](${dependencyKey[dependencies[i]].link}) ${dependencyKey[dependencies[i]].desc}`);
                    }

                    if (hasRunCommands.includes(dependencies[i])) {
                        runCommand = dependencyKey[dependencies[i]].command;
                    }
                }
                console.log(readmeDeps);
            }
            else if (filePath.endsWith('.txt')) {
                // requirements.txt
            }

        } catch (err) {
            console.error('Could not access dependency file', err);
            process.exit(1);
        }
    }


    const filename = repoName.toUpperCase().trim().replace(" ", '-');

    const commandString = runCommand !== "" ? [
        '```shell',
        `${runCommand}`,
        '```',
    ].join('\n') : "";

    const depString = readmeDeps.length > 0 ? readmeDeps.join('\n') : "";


    try {
        await writeFile(`./${filename}-README.md`, [
            `# ${repoName}`,
            '\n',
            '## Built with\n',
            `${depString}`,
            '\n',
            '## Local Development Setup\n',
            `1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) ${repoName}.`,
            `2. [Create a local clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) of the forked repository.`,
            `3. Using the terminal, move into your local copy\n`,
            '```shell',
            `cd ${repoName}`,
            '```\n',
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

    process.exit(0);
}

module.exports.generate = generate;

const hasRunCommands = ['react', 'next', 'flask'];
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
        desc: 'programming language'
    },
    typescript: {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        desc: 'a strongly typed programming language that builds on JavaScript'
    },
    react: {
        name: 'React',
        link: 'https://reactjs.org/',
        desc: 'JavaScript library for building user interfaces',
        command: 'npm start',
    },
    next: {
        name: 'Next.js',
        link: 'https://nextjs.org/',
        desc: 'full-stack React framework',
        command: 'npm run dev',
    },
    docusaurus: {
        name: 'Docusaurus',
        link: 'https://docusaurus.io/',
        desc: 'React static-site generator',
    },
}