const Doctor = require("../models/Doctor");

exports.crearDoctor = async (req, res) => {
    console.log(req.body);

    try {
        let doctor;
        doctor = new Doctor(req.body);

        await doctor.save();

        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hubo un error')

    }
}

exports.consultarDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.find();
        res.json(doctor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hubo un error')

    }
}
exports.actualizarDoctor = async (req, res) => {
    const { nombre, apellido, tipoIdentificacion, numeroDocumento, fecha, correo, area, telefono } = req.body

    try {
        let doctor = await Doctor.findById(req.params.id)
        if (!doctor) {
            res.status(404).json({ msg: "El doctor sollicitado no existe" })
        }
        doctor.nombre = nombre
        doctor.apellido = apellido
        doctor.tipoIdentificacion = tipoIdentificacion
        doctor.numeroDocumento = numeroDocumento
        doctor.fecha = fecha
        doctor.correo = correo
        doctor.area = area
        doctor.telefono = telefono
        doctor = await Doctor.findOneAndUpdate({ _id: req.params.id }, doctor, { new: true })
        res.json(doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}
exports.borrarDoctor = async (req, res) => {
    try {
        let doctor = await Doctor.findById(req.params.id)
        if (!doctor) {
            res.status(404).json({ msg: "El paciente solicitado no existe" })
        }
        await Doctor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "el doctor se elimino corractamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}


exports.obtenerDoctorId = async (req, res) => {
    try {
        let doctor_especifico = await Doctor.findById(req.params.id)
        if (!doctor_especifico) {
            res.status(404).json({ msg: "El doctor solicitado no existe" })
        } else {
            res.json(doctor_especifico)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema, comunicarse con el administrador')
    }
}
