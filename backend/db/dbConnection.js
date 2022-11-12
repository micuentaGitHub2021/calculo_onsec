// mongodb+srv://josselin:123josselin@cluster0.tyshlue.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose');
const DB_STRING="mongodb+srv://josselin:123josselin@cluster0.tyshlue.mongodb.net/?retryWrites=true&w=majority"
const dbConnection= async()=>{
    try {
        await mongoose.connect(DB_STRING,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('basedatos online');
    } catch (error) {
        console.log(error);
     throw new Error('erro al iniciar la base datos');
    }
}

module.exports={
    dbConnection
}