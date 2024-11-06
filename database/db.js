const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://admin:vymfIk5hisretypzov@bread.t5f5e.mongodb.net/testDB?retryWrites=true&w=majority&appName=Bread',
           );
        console.log(`MongoDB Connected`);
    } catch (error){
        console.error(error);
        proceed.exit(1);
    }
};

module.exports = connectDB;