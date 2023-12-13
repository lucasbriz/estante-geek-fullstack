const {Router} = require('express');
const {Profile} = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const profiles = await Profile.findAll();
    res.status(200).json(profiles);
});

router.get('/:id', async (req, res) => {
    const profiles = await Profile.findByPk(req.params.id);
    res.status(200).json(profiles);
});

router.post('/', async (req, res) => {
    const {nome, nome_usuario, email, senha} = req.body;
    const newProfile = Profile.create({nome, nome_usuario, email, senha});
    res.status(200).json({message: 'Perfil cadastrado com sucesso!'});
});

router.put('/:id', async(req, res) => {
    const {nome, nome_usuario, email, senha} = req.body; 

    await Profile.update(
        {nome, nome_usuario, email, senha},
        {
            where: {id: req.params.id},
        }
    );

    res.status(200).json({message: 'Perfil atualizado com sucesso!'});
});

router.delete('/:id', async(req, res) => {
    await Profile.destroy({
        where: {
            id: req.params.id,
        },
    });

    res.status(200).json({message: 'Perfil excluído com sucesso!'});
});

module.exports = router;