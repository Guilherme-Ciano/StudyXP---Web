// Adicionando o express
const express = require("express");
// Adicionando o morgan
const morgan = require("morgan");
// Adicionando o cors
const cors = require("cors");
// Adicionando as rotas da aplicação
const routes = require('./routes')

require('../database')

const app = express();

app.use(express.json());

app.use(routes);
app.listen(3000);

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));