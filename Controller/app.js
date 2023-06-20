import express from "express"
const app = express()
const port = process.env.port || "3000"
import student from "./routes/student.js"


app.use("/student", student)

app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})