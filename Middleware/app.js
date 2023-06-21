import express from "express"
const app = express();
const port = process.env.port || "3000"
import web from "./routes/web.js"
import myLogger from "./middlewares/logger-middleware.js";
import student from "./routes/student.js"

// set template engine
app.set("view engine", "ejs")

// Application Level Middleware
// app.use(myLogger)
// app.use("/about",myLogger)

// Load Routes
app.use("/", web)
app.use("/", student)


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})