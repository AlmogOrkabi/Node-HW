const os = require('node:os');
const fs = require('node:fs/promises');
const path = require('node:path');
const funcs = require('./functions');

const { EventHandler } = require('./models/EventHandler');


async function Main() {
    // await funcs.Create('hello world', 1);
    // await funcs.ConcatFiles();

    let x = new EventHandler();
    x.on('readFile', funcs.OnReadEvent);
    let y = new EventHandler();
    y.on('endProgram', funcs.OnEndProgram);


    await x.emit('readFile');

    await y.emit('endProgram');

}

Main();

