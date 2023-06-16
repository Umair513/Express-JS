
import express from "express"
import stu from "./routes/student.js"
import tea from "./routes/teacher.js"
const app = express()
const port = process.env.port || "3000"

// Load Router Modules
app.use("/student", stu)
app.use("/teacher",tea)

app.listen(port, () => {
    console.log(`App is listening at ${port}`)
})