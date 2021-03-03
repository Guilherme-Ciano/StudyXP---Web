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

const repositories = [
    {
        title: "Banco de Dados",
        description: "Nesta atividade, os alunos deverão criar um sistema de faculdade utilizando o modelo ralacional, aolicando os conceitos de chave estrangeira.",
        anexos: [
            {
                title: "Comandos mais utilizados",
                link: `C:\Users\Guilherme\Desktop\StudyXP\_pages\script.js`,
            }
        ]
    },
    {
        title: "Daw",
        description: "Nesta atividade, os alunos deverão criar um sistema de enfermaria.",
        anexos: [
            {
                title: "Comandos mais utilizados",
                link: `C:\Users\Guilherme\Desktop\StudyXP\_pages\script.js`,
            }
        ]
    }
]

routes.get("/users", (req, res) => {
    return res.json(users);
});

routes.get("/profile", (req, res) => {
    return res.json(profile);
})

routes.get("/repositories", (req, res) => {
    return res.json(repositories);
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