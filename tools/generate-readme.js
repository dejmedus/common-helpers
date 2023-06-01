#!/usr/bin/env node

const { writeFile, readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const fs = require('fs')

async function generate(repoName) {
    let filePath;
    let readmeDeps = [];
    let runCommand = '';

    try {

        if (fs.existsSync('./package.json')) {
            filePath = resolve('./package.json');
        }
        else if (fs.existsSync('./requirements.txt')) {
            filePath = resolve('./requirements.txt')
        }
        else if (fs.existsSync('./Cargo.toml')) {
            filePath = resolve('./Cargo.toml')
        }
    }
    catch (err) {
        console.log("Error while searching for a dependency file", err);
    }

    if (filePath !== undefined) {
        let dependencies = [];
        try {
            const contents = await readFile(filePath, { encoding: 'utf8' });

            if (filePath.endsWith('.json')) {
                const packageFile = JSON.parse(contents);
                if (packageFile["devDependencies"] !== undefined) {
                    dependencies = [...Object.keys(packageFile.dependencies), ...Object.keys(packageFile.devDependencies)];
                }
                else {
                    dependencies = Object.keys(packageFile.dependencies);
                }


                // clean up dependency list
                for (let i = 0; i < dependencies.length; i++) {
                    dependencies[i] = dependencies[i].split("/")[0].split("-")[0].replace("@", "");
                }
            }
            else if (filePath.endsWith('.txt')) {
                contents.split('\n').forEach((dep, i) => {
                    dependencies[i] = dep.split("==")[0];
                });
            }
            else if (filePath.endsWith('Cargo.toml')) {
                const regex = /(.+)\s+=\s+{.+}/gm
                const results = contents.matchAll(regex)
                for (let result of results) {
                    dependencies.push(result[1])
                }
            }

        } catch (err) {
            console.error('Could not access dependency file');
        }

        const dependencyKeyList = Object.keys(dependencyKey);

        dependencies = [...new Set(dependencies)].filter(Boolean).reverse();

        // create readmeDeps
        for (let i = 0; i < dependencies.length; i++) {
            if (dependencyKeyList.includes(dependencies[i])) {
                readmeDeps.push(`- [${dependencyKey[dependencies[i]].name}](${dependencyKey[dependencies[i]].link}) ${dependencyKey[dependencies[i]].desc}`);
            }

            if (hasRunCommands.includes(dependencies[i])) {
                runCommand = dependencyKey[dependencies[i]].command;
            }
        }
    }

    const filename = repoName.toLowerCase().trim().replaceAll(" ", '-');
    const commandString = runCommand !== "" ? [
        `\n5. Run the app\n`,
        '```shell',
        `${runCommand}`,
        '```',
    ].join('\n') : "";

    const depString = readmeDeps.length > 0 ? `\n## Built with\n\n${readmeDeps.reverse().join('\n')}\n` : "";


    try {
        await writeFile(`./README-${filename}.md`, [
            `# ${repoName}`,
            `${depString}`,
            '## Local Setup\n',
            `1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) ${filename}`,
            `2. [Create a local clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) of the forked repository`,
            `3. Using the terminal, move into your local copy\n`,
            '```shell',
            `cd ${filename}`,
            '```\n',
            `4. Install dependencies\n`,
            '```shell',
            `npm i`,
            '```',
            `${commandString}`,
            '## Contributing\n',
            '1. Create a new branch\n',
            '```shell',
            `git checkout -b 'your-branch-name'`,
            '```\n',
            `2. Make changes.`,
            `3. Push your branch to the upstream repo\n`,
            '```shell',
            `git push origin your-branch-name`,
            '```\n',
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

const hasRunCommands = ['react', 'next', 'Flask', 'tauri'];
const dependencyKey = {
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
    Flask: {
        name: 'Flask',
        link: 'https://flask.palletsprojects.com/en/',
        desc: 'a Python web framework',
        command: 'flask --debug run'
    },
    pygame: {
        name: 'pygame',
        link: 'https://www.pygame.org/docs/?eventId=PyGames_5md2QsFEamGB',
        desc: 'a set of Python modules for building video games',
    },
    yew: {
        name: 'Yew',
        link: 'https://yew.rs/',
        desc: 'a framework for creating reliable and efficient web applications with Rust.',
    },
    tauri: {
        name: 'Tauri',
        link: 'https://tauri.app/',
        desc: 'an OS-agnostic app construction toolkit',
        command: 'npm run tauri dev'
    },
    Jinja2: {
        name: 'Jinja',
        link: 'https://palletsprojects.com/p/jinja/',
        desc: 'template engine'
    },
    docusaurus: {
        name: 'Docusaurus',
        link: 'https://docusaurus.io/',
        desc: 'React static-site generator',
    },
    sqlite: {
        name: 'SQLite',
        link: 'https://www.sqlite.org/index.html',
        desc: 'SQL database'
    },
    numpy: {
        name: 'NumPy',
        link: 'https://numpy.org/',
        desc: 'numerical computing package'
    }
}
