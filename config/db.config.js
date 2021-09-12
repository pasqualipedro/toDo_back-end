//
// HERE WE ADD THE CONNECTION WITH OUR DB THROUGH EXPRESS
//
const mongoose = require(`mongoose`);

const MONGO_URI = "mongodb://admin:senha123@cluster0-shard-00-00.mlab8.mongodb.net:27017,cluster0-shard-00-01.mlab8.mongodb.net:27017,cluster0-shard-00-02.mlab8.mongodb.net:27017/tododb?ssl=true&replicaSet=atlas-37km2k-shard-0&authSource=admin&retryWrites=true&w=majority";

const connect = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DataBase connected: ${connection.connections[0].name}`);
    } catch (error) {
        console.log(error);
    }
    
};

module.exports = connect;