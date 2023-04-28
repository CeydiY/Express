const mongoose = require('mongoose');

const lagartoSpock = new mongoose.Schema({
    nombreJugador: {
        required: true,
        type: String
    },
    fechaHoraPartida: {
        required: true,
        type: String
    },
    resultadoPartida: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('LagartoSpock', lagartoSpock)