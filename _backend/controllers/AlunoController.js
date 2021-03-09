const Aluno = require('../models/Aluno');

module.exports = {
    async index (req,res) {
        const users = await Aluno.findAll();

        return res.json(users);

    },

    async store(req, res) {
        const { name, ra, email, phone, password, grade } = req.body;

        try {
            
            const aluno = await Aluno.create({ name, ra, email, phone, password, grade });
            return res.json(aluno);

        } catch (error) {
            console.log(error);
        }

    }
};