const os = require('node:os');
const fs = require('node:fs/promises');
const path = require('node:path');
const funcs = require('./functions');


async function Main() {
    await funcs.Create('hello world', 1);
    await funcs.ConcatFiles();
}

Main();

