const Paciente = require('../models/PacienteModelo')

exports.obtenerPaciente = async (req, res) => {
    try {
        const pacientes = await Paciente.find()
        res.json(pacientes)
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}
exports.crearPaciente = async (req, res) => {
    try {
        let paciente;
        paciente = new Paciente(req.body)
        await paciente.save()
        res.send(paciente)
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema crearP, comunicarse con el administrador')

    }
}
exports.actualizarPaciente = async (req, res) => {
    const { nombre, apellido, documento, numDocumento, telefono, edad, altura, sintomas } = req.body

    try {
        let paciente = await Paciente.findById(req.params.id)
        if (!paciente) {
            res.status(404).json({ msg: "El paciente sollicitado no existe" })
        }
        paciente.nombre = nombre
        paciente.apellido = apellido
        paciente.documento = documento
        paciente.numDocumento = numDocumento
        paciente.telefono = telefono
        paciente.edad = edad
        paciente.altura = altura
        paciente.sintomas = sintomas
        paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, paciente, { new: true })
        res.json(paciente)
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}
exports.borrarPaciente = async (req, res) => {
    try {
        let paciente = await Paciente.findById(req.params.id)

        if (!paciente) {
            res.status(404).json({ msg: "El paciente solicitado no existe" })
        }
        await Paciente.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "el producto se elimino corractamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}
exports.obtenerPacienteId = async (req, res) => {
    try {
        let paciente_especifico = await Paciente.findById(req.params.id)
        if (!paciente_especifico) {
            res.status(404).json({ msg: "El paciente solicitado no existe" })
        } else {
            res.json(paciente_especifico)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}