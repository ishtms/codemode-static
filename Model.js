var mongoose = require('mongoose')

var Schema = mongoose.Schema({
    user: {type: Boolean, default: true},
    time: {type: String, default: new Date().toDateString()
})

module.exports = mongoose.model('UserCount', Schema)