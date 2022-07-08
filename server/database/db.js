import mongoose from "mongoose";

const connection = async (username,password) => {

    const URL = `mongodb://${username}:${password}@dataentry-app-shard-00-00.c9doh.mongodb.net:27017,dataentry-app-shard-00-01.c9doh.mongodb.net:27017,dataentry-app-shard-00-02.c9doh.mongodb.net:27017/?ssl=true&replicaSet=atlas-xgh3zn-shard-0&authSource=admin&retryWrites=true&w=majority`;
  
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("My Database is Connected");
    } catch (error) {
        console.log("Error While Connecting With The database", error);
    }
}

export default connection; 