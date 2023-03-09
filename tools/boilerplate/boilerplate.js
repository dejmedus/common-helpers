#!/usr/bin/env node

const { copyFile, mkdir } = require('node:fs/promises');
const { join } = require('node:path');

async function generate() {
    // create assets folder
    try {
        await mkdir('assets', { recursive: true });
    } catch (err) {
        console.error('Assets folder could not be created', err);
    }

    // copy boilerplate files
    try {
        await copyFile(join(__dirname, 'files', 'index.html'), 'index.html');
        await copyFile(join(__dirname, 'files', 'index.js'), 'index.js');
        await copyFile(join(__dirname, 'files', 'styles.css'), 'styles.css');
    } catch (err) {
        console.error('Boilerplate files could not be copied', err);
    }
}

module.exports.generate = generate;