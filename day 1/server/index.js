const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const mongoose = require('mongoose')

const userData = require('./schema')

mongoose.connect('mongodb://localhost:27017')


app.use(bodyParser.json())




app.post("/api/addUser", (req, res, next) => {
    var data = req.body
    userData.create(data)
    res.send('hello')

})


app.get("/api/getData/:username", (req, res, next) => {
    var userName = req.params.username
    userData.find({ userName: userName })
        .then((data) => {
            res.send(data)
        })
        .catch(next)
})



app.listen(3000, () => {
    console.log('server is running')
})





