var mongoose = require('mongoose')

var Schema = mongoose.Schema({
    user: {type: Boolean, default: true}
})

module.exports = mongoose.model('UserCount', Schema)