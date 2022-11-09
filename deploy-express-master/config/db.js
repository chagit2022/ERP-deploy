const mongoose = require('mongoose');
require('dotenv').config({path:'config.env'});

const connectarDB = async() => {
    try {
        await mongoose.connect(process.env.CONNEXION_URL, {
            keepAlive: true,
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        // console.log(process.env.CONNEXION_URL);
        console.log('base de datos conectada');

    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

module.exports = connectarDB
