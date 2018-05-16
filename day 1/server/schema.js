const mongoose = require('mongoose')
const schema = mongoose.Schema



var data = new schema({
    userName: {
        type: String
    },
    password: {
        type: String
    }
})



const userData = mongoose.model('userData', data)
module.exports = userData
