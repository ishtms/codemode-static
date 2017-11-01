var mongoose = require('mongoose')

var Schema = mongoose.Schema({
    user: {type: Boolean, default: true},
    time: {type: String, default: new Date().getDate() +" "+ new Date().getDay()+" " + new Date().getTime() + " "+ new Date().getFullYear()}
})

module.exports = mongoose.model('UserCount', Schema)