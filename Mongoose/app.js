import express from "express"
import mongoose from "mongoose"
const app = express()
const port = process.env.port || "3000"
import connectDB from "./db/connectdb.js"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb"


// Connection to Database created through Compass
// mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
//     console.log("Connected Successfully...")
// })

connectDB(DATABASE_URL)



app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})