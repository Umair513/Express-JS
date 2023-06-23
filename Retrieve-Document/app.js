import express from "express"
import connectDB from "./db/connectDB.js"
const app = express()
const port = process.env.port || "3000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

import { getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField, getDocbyField, getDocbyFieldSpecificField, getLimitedDoc, getSkipDoc, getDocCount, getSortedDoc, mixDocs, compDoc, logDoc } from "./models/Student.js"


// Database connection
connectDB(DATABASE_URL)

// getAllDoc()
// getAllDocSpecificField()
// getSingleDoc()
// getSingleDocSpecificField()
// getDocbyField()
// getDocbyFieldSpecificField();
// getLimitedDoc();
// getSkipDoc()
// getDocCount()
// getSortedDoc()
// mixDocs
// compDoc()
logDoc()




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})