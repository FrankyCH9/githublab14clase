const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' }); // Directorio donde se guardarán los archivos adjuntos

app.post('/upload', upload.array('files'), (req, res) => {
  const fileInfos = [];

  req.files.forEach(file => {
    const fileInfo = {
      filename: file.filename,
      originalname: file.originalname,
      size: file.size,
      mimetype: file.mimetype
    };
    fileInfos.push(fileInfo);
  });

  res.send(fileInfos);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
