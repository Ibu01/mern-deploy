import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-cagyvsn-shard-00-00.qxwho97.mongodb.net:27017,ac-cagyvsn-shard-00-01.qxwho97.mongodb.net:27017,ac-cagyvsn-shard-00-02.qxwho97.mongodb.net:27017/?ssl=true&replicaSet=atlas-hmhvba-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true })
        console.log("Database connection successfully")
    } catch (error) {
        console.log("Error s while connecting the database", error.message)
    }
}

export default Connection