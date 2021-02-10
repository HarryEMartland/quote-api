

(async () => {

    const fs = require('fs').promises;
    const quotes = require('./quotes.json')

    await fs.mkdir('out')

    const writeFiles = quotes.map((quote, i) => {
        const data = new Uint8Array(Buffer.from(JSON.stringify(quote)))
        return fs.mkdir(`out/${i}`).then(()=>{
            return fs.writeFile(`out/${i}/index.html`, data)
        })
    })

    await Promise.all(writeFiles)

    const data = new Uint8Array(Buffer.from(JSON.stringify({
        total: quotes.length
    })))
    await fs.writeFile('out/index.html', data)

})().catch(console.error);