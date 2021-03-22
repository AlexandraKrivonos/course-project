const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    title: {type: String, required: true, unique: true},
    author: {type: Types.ObjectId, ref: 'User'},
    genre: {type: String, required: true},
    shortDescription: {type: String, required: true},
    data : {type: Date, default: Date.now},
    likes: {type: Number, Default: 0},

})

module.exports = model ('Fanfic', schema)