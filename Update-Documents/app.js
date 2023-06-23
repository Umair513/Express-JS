import express from "express"
import connectDB from "./db/connectDB.js"
const app = express()
const port = process.env.port || "3000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

import { updateDocById, updateOneDoc, updateManyDoc } from "./models/Student.js"

// Database connection
connectDB(DATABASE_URL)

// updateDocById("64943820f87259f72ebf1f37")
// updateOneDoc("94943820f87259f72ebf1f37")
updateManyDoc(24)




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})