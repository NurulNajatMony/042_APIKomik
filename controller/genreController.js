const db = require('../models');

async function getAllGenre(req, res) {
    try {
        const genre = await db.Genre.findAll();
        res.status(200).json(genre);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

async function getGenreById(req, res) {
    try {
        const genre = await db.Genre.findByPk(req.params.id);

        if (!genre) {
            return res.status(404).json({
                message: 'Genre tidak ditemukan'
            });
        }

        res.status(200).json(genre);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

