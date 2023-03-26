const os = require('node:os');
const fs = require('node:fs/promises');
const path = require('node:path');

async function Create(t, n) {
    await fs.writeFile(path.join(__dirname, 'files', `file${n}.txt`), t, (error) => {
        if (error) throw error;
    });
    console.log(`created file${n}`);
}

async function Read(n) {
    let f = await fs.readFile(path.join(__dirname, 'files', `file${n}.txt`), (error) => {
        if (error) throw error;
    });
    return f;
}

function GetRandNumber() {
    return Math.floor(Math.random() * 5) + 1;
}



async function loopFiles(num) {
    for (let i = 1; i <= num; i++) {
        let t = await Read(i);
        console.log('t ==>>' + t)
        await fs.appendFile(path.join(__dirname, 'files', 'stringtxt.txt'), t.toString() + '\n', (error) => {
            if (error) throw error;
        })
    }
}

async function ConcatFiles() {
    await fs.unlink(path.join(__dirname, 'files', 'concatTextFile.txt'), (error) => {
        if (error) throw error;
    })
    let num = await GetRandNumber();

    await loopFiles(num);

    await fs.rename(path.join(__dirname, 'files', 'stringtxt.txt'), path.join(__dirname, 'files', 'concatTextFile.txt'))
}


async function OnReadEvent() {
    let num = await GetRandNumber();
    console.log(await (await Read(num)).toString());
}

async function OnEndProgram() {
    for (let i = 1; i <= 5; i++) {
        console.log(await (await Read(i)).toString(), '\n**********');
    }
}


module.exports = { Create, Read, GetRandNumber, ConcatFiles, OnReadEvent, OnEndProgram };