console.log('test nodemon');
const express = require('express'); // rappelle d'express
const connectarDB = require('./config/db')
const cors = require('cors')

const app = express(); // implementation du service - implementacion del servicio
// connection a la base de données - conneccion al la baase de datos
connectarDB(); 

app.use(cors()) // pour corriger le probleme de canal 4000/4200 - para corregir el tema de canal 4000 y 4200

// creation d'un json de la base de données - creacion de un json de la base de datos
app.use(express.json())

//incrementation de api dans la logique des adresse http
// incremetacion de api en la logica de las direccionnes http
app.use('/api', require('./routes/routes'))

// route principale - ruta principal
app.get('/', (req, res) => {
    res.send('bienvenue')
})
const puerto = process.env.PORT || 4000
// creation du - creacion del localhost:4000
app.listen(puerto, ()=>{
    console.log('serveur en place http://localhost:4000');
})
