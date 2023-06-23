import express from "express"
import connectDB from "./db/connectDB.js"
const app = express()
const port = process.env.port || "3000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

import { deleteDocById, deleteOneDoc, deleteManyDoc } from "./models/Student.js"

// Database connection
connectDB(DATABASE_URL)

// deleteDocById("64943bc7ecd5a6e56d8ee47b")
// deleteOneDoc("64943820f87259f72ebf1f37")
deleteManyDoc("Usman")




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})