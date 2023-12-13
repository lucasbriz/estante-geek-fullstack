const {Router} = require('express');
const {Edition} = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const editions = await Edition.findAll();
    res.status(200).json(editions);
});

router.get('/:id', async (req, res) => {
    const editions = await Edition.findByPk(req.params.id);
    res.status(200).json(editions);
});

router.post('/', async (req, res) => {
    const {titulo, autor, editora, ano, status, nota, comentario} = req.body;
    const newEdition = Edition.create({titulo, autor, editora, ano, status, nota, comentario});
    res.status(200).json({message: 'Edição cadastrada com sucesso!'});
});

router.put('/:id', async(req, res) => {
    const {titulo, autor, editora, ano, status, nota, comentario} = req.body; 

    await Edition.update(
        {titulo, autor, editora, ano, status, nota, comentario},
        {
            where: {id: req.params.id},
        }
    );

    res.status(200).json({message: 'Edição atualizada com sucesso!'});
});

router.delete('/:id', async(req, res) => {
    await Edition.destroy({
        where: {
            id: req.params.id,
        },
    });

    res.status(200).json({message: 'Edição excluída com sucesso!'});
});

module.exports = router;