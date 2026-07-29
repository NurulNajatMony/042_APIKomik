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

async function createGenre(req, res) {
    try {
        const { nama } = req.body;

        const genre = await db.Genre.create({
            nama
        });

        res.status(201).json(genre);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

async function updateGenre(req, res) {
    try {
        const genre = await db.Genre.findByPk(req.params.id);

        if (!genre) {
            return res.status(404).json({
                message: 'Genre tidak ditemukan'
            });
        }

        genre.nama = req.body.nama;

        await genre.save();

        res.status(200).json(genre);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

async function deleteGenre(req, res) {
    try {
        const genre = await db.Genre.findByPk(req.params.id);

        if (!genre) {
            return res.status(404).json({
                message: 'Genre tidak ditemukan'
            });
        }

        await genre.destroy();

        res.status(200).json({
            message: 'Genre berhasil dihapus'
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {
    getAllGenre,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
};