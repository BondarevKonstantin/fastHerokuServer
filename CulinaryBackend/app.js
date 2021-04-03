const express = require('express');
const ingredients = require("./data/ingredients")
const recepts = require("./data/recepts")
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

app.get("/api/ingredients", (req, res) => {
    res.json(ingredients)
})

app.get("/api/recepts", (req, res) => {
    res.json(recepts)
})

// app.post("/api/recepts", (req, res) => {
//     const ingr = req.body.ingredients

//     res.json()
// })

app.listen(5000, console.log("Server running on port 5000"))