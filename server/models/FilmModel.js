const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema(
    {
        titre: {
            type: String,
            required: [true, 'Le titre est obligatoire'],
            trim: true, // Supprime les espaces inutiles
            minlength: [1, 'Le titre doit contenir au moins 1 caractère']
        },
        annee: {
            type: Number,
            required: [true, 'L’année est obligatoire'],
            min: [1900, 'L’année doit être supérieure à 1900'],
            max: [new Date().getFullYear(), `L’année doit être inférieure ou égale à ${new Date().getFullYear()}`]
        },
        note: {
            type: Number,
            required: [true, 'La note est obligatoire'],
            min: [0, 'La note doit être au minimum 0'],
            max: [5, 'La note doit être au maximum 5']
        }
    }
)

const Film= mongoose.model('Film',FilmSchema);

module.exports = Film;