const mongoose = require('mongoose'); 

const DoctorSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    tipoIdentificacion: {
        type: String,
        require: true
    },
    numeroIdentificacion: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    area: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    fech_cre: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Doctor',DoctorSchema); // exprotamos el modelo que permite enviar la data a la DB