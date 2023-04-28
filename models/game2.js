const mongoose = require('mongoose');

const tamagotchi = new mongoose.Schema({
    nombreMascota: {
        required: true,
        type: String
    },
    nivelHambre: {
        required: true,
        type: Number
    },
    nivelEnergia: {
        required: true,
        type: Number
    },
    nivelFelicidad: {
        required: true,
        type: Number
    },
    fechaNacimiento: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Tamagotchi', tamagotchi)