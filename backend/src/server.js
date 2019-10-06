const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');


const app = express();
// Fazendo conexão com o banco de dados mongodb na nuvem
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-bc9ho.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// GET, PUT, POST, DELETE


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
app.use(routes);

// // req.query = Acessar query params (para filtros)
// app.post('/users', (req, res) => {
//     return res.json({idade: req.query.idade});
// });

// app.put('/users/:id', (req, res) => {
// // req.params = Acessar route params (para edição e exclusão)
//     return res.json({id: req.params.id});
// });

// app.post('/users', (req, res) => {

// // req.body = Acessar corpo das requisições (criação e edição)
//     return res.json(req.body);
// });

app.listen(3333);