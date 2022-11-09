const Contacto = require("../models/ContactoModelo");
// creation des conecteurs pour les controllers
exports.obtenerContactos = async (req,res)=>{
    console.log('esta dando todos los contactos de la BD ')
    try {
        const contactos = await Contacto.find()
        res.json(contactos)
        console.log("contactos get");
        console.log(contactos);
    } catch (error) {
        console.log(error)
        res.status(500).send('hay un problema ... comuniquese con el administrador') // response au serveur -- respuesta al servidor
    }
}//ok
exports.crearContacto = async (req,res)=>{
    console.log('esta creando todos los contactos de la BD test ')
    try {
        let contacto;
        contacto = new Contacto(req.body)
        await contacto.save()
        res.send(contacto)
        console.log(contacto);
        console.log("contacto.post");
    } catch (error) {
        console.log(error)
        res.status(500).send('hay un problema ... comuniquese con el administrador')
    }
}//ok

exports.borrarContacto = async (req,res)=>{
    console.log('esta borrando todos los contactos de la BD ')
    try {
        let contacto = await Contacto.findById(req.params.id)

        if (!contacto) {
            res.status(404).json({mensaje: 'el contacto solocitado no existe'})
        }
        await Contacto.findOneAndDelete(_id = req.params.id)
        res.json({ msg: "contacto borrado"})

    } catch (error) {
        console.log(error)
        res.status(500).send('hay un problema ... comuniquese con el administrador')
    }
} // ok

// exports.actualizarContacto = async (req,res)=>{
//     console.log('esta actualizando todos los contactos de la BD ')
//     try {
//         const {nombres, apellidos, correo, telefono, nombreEmp, sitioEmp, tipoEmp, categoriaEmp, listUser, mensajeBox}= req.body

//         let contacto = await Contacto.findById(req.params.id)
//         if (!contacto) {
//             res.status(404).json({mensaje: 'el contacto solocitado no existe'})
//         }
//         contacto.nombres = nombres
//         contacto.apellidos = apellidos
//         contacto.correo = correo
//         contacto.telefono = telefono
//         contacto.nombreEmp = nombreEmp
//         contacto.sitioEmp = sitioEmp
//         contacto.tipoEmp = tipoEmp
//         contacto.categoriaEmp = categoriaEmp
//         contacto.listUser = listUser
//         contacto.mensajeBox = mensajeBox

//         contacto = await Contacto.findOneAndUpdate({_id: req.params.id}, contacto, {new: true})
//         res.json(contacto)

//     } catch (error) {
//         console.log(error)
//         res.status(500).send('hay un problema ... comuniquese con el administrador')
//     }
// }


// exports.obtenerContactoEspecifico = async (req,res)=>{
//     console.log('esta dando un contacto especifico de la BD')
//     try {
//         let contacto_especifico = await Contacto.findById(req.params.id)

//         if(!contacto_especifico){
//             res.status(404).json({mensaje: 'el contacto solocitado no existe'})
//         }else{
//             res.send(contacto_especifico)
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(500).send('hay un problema ... comuniquese con el administrador')
//     }
// }//ok
