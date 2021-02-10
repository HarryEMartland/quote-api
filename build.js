(async () => {

    const fs = require('fs').promises;
    const quotes = require('./quotes.json');
    const BUILD_DIR = 'build';

    await fs.rmdir(BUILD_DIR, {recursive: true})

    await fs.mkdir(BUILD_DIR);

    const writeFiles = quotes.map((quote, i) => {
        const data = new Uint8Array(Buffer.from(JSON.stringify(quote)))
        return fs.mkdir(`${BUILD_DIR}/${i}`).then(() => {
            return fs.writeFile(`${BUILD_DIR}/${i}/index.html`, data)
        })
    })

    await Promise.all(writeFiles)

    const data = new Uint8Array(Buffer.from(JSON.stringify({
        total: quotes.length
    })))
    await fs.writeFile(`${BUILD_DIR}/index.html`, data)

    await fs.copyFile('example.html', `${BUILD_DIR}/example.html`)

})().catch(console.error);