const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

// routes.post('/posts', multer(multerConfig).single('file'), (req,res) => {
//     return res.json({ hello: 'World' });
// });

const users = [
    {
        id: "kasdmksakdmsakdmskamkdmksadmksamkdsmka",
        name: 'Gui',
        email: 'asdfsdf@gmail.com',
        password: "123456",
        age: 20
    },
    {
        name: 'Carlos',
        age: 30
    }
]

const profile = {
    name: 'Guilherme Ciano',
    date: '31/12/2003',
    ra: '012304320432-6'
}



routes.get("/users", (req, res) => {
    return res.json(users);
});

routes.get("/profile", (req, res) => {
    return res.json(profile);
})

routes.post("/login", (req, res) => {
    const user = req.body;
});


// Alunos Rotas - Exemplos
const alunos = [];

routes.get("/alunos", (req, res) => {
    return res.json(alunos);
})

routes.post("/aluno", (req, res) => {
    const aluno = req.body;

    alunos.push(aluno);
});

module.exports = routes;