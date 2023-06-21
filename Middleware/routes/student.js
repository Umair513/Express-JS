import express from "express"
const router = express.Router()
import { studentController } from "../controllers/studentController.js"
import myLogger from "../middlewares/logger-middleware.js"

// Router level Middleware
// router.use(myLogger)
router.use("/student", myLogger)


router.get("/student", studentController)
router.get("/event", (req, res) => {
    res.send("Events")
})

export default router