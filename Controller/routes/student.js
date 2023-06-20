import express from "express"
const router = express.Router()
import { allStudent } from "../controllers/studentController.js"
import { deleteStudent } from "../controllers/studentController.js"



router.get("/all", allStudent)
router.get(`/delete/:id([0-9]{2})`,deleteStudent )

export default router