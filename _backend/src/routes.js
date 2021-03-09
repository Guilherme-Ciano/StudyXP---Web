const routes = require('express').Router();


const multer = require('multer');
const multerConfig = require('./config/multer');


const AlunoController = require('../controllers/AlunoController')

// routes.post('/posts', multer(multerConfig).single('file'), (req,res) => {
//     return res.json({ hello: 'World' });
// });

routes.get("/users", (req, res) => {
    return res.json(users);
});

routes.get("/profile", (req, res) => {
    return res.json(profile);
})

routes.post("/login", (req, res) => {
    const user = req.body;
});

routes.get("/aluno", AlunoController.index)
routes.post("/aluno", AlunoController.store)

module.exports = routes;