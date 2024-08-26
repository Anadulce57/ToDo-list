const express = require('express'); //Importa o módulo Express, para construir aplicações web e APIs em Node.js
const bodyParser = require('body-parser'); //analisa o corpo das requisições HTTP, facilitando o acesso aos dados enviados no corpo das requisições
const path = require('path'); //Módulo nativo do Node.js que lida com caminhos de arquivos e diretórios.
const rotaTarefa = express.Router();

const app = express();
const PORT = 3300;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});