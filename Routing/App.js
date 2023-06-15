// Routing
// const express = require("express")  --> before ES6

import express from "express"  // --> ES6
const app = express();
const port = process.env.port || "3000"

// Routes
app.get("/", (req, res) => {
    res.send("Get Method")
})

// app.all("/kujhBhe", (req, res) => {
//     res.send("All Method")
// })

// app.all("*", (req, res) => {
//     res.send("Page not found")  --> Default Route placed at the end of Routes
// })


// // String Path
// app.get("/about", (req, res) => {
//     res.send("About Page")
// })

// app.get("/contact", (req, res) => {
//     res.send("Contact Page")
// })


// String Pattern Path
// app.get("/ab?cd", (req, res) => {
//     res.send("This route path will match /abcd");
// });


// // Regular Expression Path
// app.get(/a/, (req, res) => {
//     res.send("Your URL Contains a");  // any URL contains a in it
// });


// // One Callback
// app.get("/cbexample1", (req, res) => {
//     res.send("One Callback Example")
// })


// More than one callback

// app.get("/cbexample2", (req, res, next) => {
//     console.log("First callback")
//     next()
// }, (req, res) => {
//     console.log("Second callback")
//     res.send("More than one callback")
// })


// // Array of Callbacks
// const cb1 = (req, res, next) => {
//     console.log("First CallBack")
//     next()
// }
// const cb2 = (req, res, next) => {
//     console.log("Second CallBack")
//     next()
// }
// const cb3 = (req, res) => {
//     console.log("Third CallBack")
//     res.send("An Array of Callback Example")
// }
// app.get("/cbexample3", [cb1,cb2,cb3])



// Combination of independent and array of callbacks
// const cb1 = (req, res, next) => {
//     console.log("First CallBack")
//     next()
// }
// const cb2 = (req, res, next) => {
//     console.log("Second CallBack")
//     next()
// }

// app.get("/cbexample4", [cb1, cb2], (req, res, next) => {
//     console.log("Third Callback")
//     next()
// }, (req, res) => {
//     console.log("Fourth Callback")
//     res.send("Combination of independent and array of callbacks")
// })


// Chained Route Callback
app.get("/student", (req, res) => {
    res.send("All Student")
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})