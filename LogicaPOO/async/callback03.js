const fs = require('fs');

fs.readFile(
    'textoQualquer.txt',
    (err, buf) => {
        if (err)
            throw err
        else
            console.log(buf.toString());
    })