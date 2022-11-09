const mongoose = require('mongoose');

// struture de l'information gardée au format json
// structura de la informacion guardada al formato json
const ContactoSchema = new mongoose.Schema({
    nombres : {
        type: String,
        required: true,
    },
    apellidos : {
        type: String,
        required:true,
    },
    correo : {
        type: String,
        required:true
    },
    telefono : {
        type: Number,
        required:true
    },
    nombreEmp : {
        type: String,
        required:true
    },
    sitioEmp : {
        type: String,
        required:true
    },
    tipoEmp : {
        type: String,
        required:true
    },
    categoriaEmp : {
        type: String,
        required:true
    },
    listUser : {
        type: Array,
        required:true
    },
    mensajeBox : {
        type: String,
        required:true
    },
    // creation de la date de creation du dit document json
    //creation de la fecha de creacion del mismo documento json
    dateCreation:{
        type: Date,
        default: Date.now()
    }
})

// on exporte ce module, selon le model de mongoose a Contacto au schema contacto
//exportamos este módulo, según el modelo de mangoose a Contacto al esquema de contacto

module.exports = mongoose.model('Contacto', ContactoSchema)
