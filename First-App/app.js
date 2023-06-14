// First Express JS Application

// const express = require("express")

import express from "express"  // ES6 Syntax
const app = express()
const port = process.env.PORT || "3000"

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})