const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/list-files', (req, res) => {
    const directoryPath = path.join(__dirname, '../..'); // Ruta al directorio
    console.log(directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send(err);
        }

        const fileList = files.map(file => {
            return {
                name: file,
                type: path.extname(file)
            };
        });

        res.json(fileList);
    });
});

app.listen(3000, () => {
    console.log('Servidor Node.js escuchando en el puerto 3000');
});
