import express from "express"
import mongoose from "mongoose"
const app = express()
const port = process.env.port || "3000"
import connectDB from "./db/connectdb.js"
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://umair:123456@localhost:27017/schooldb?authSource=schooldb"

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"


// Database Connection
connectDB(DATABASE_URL)



app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})