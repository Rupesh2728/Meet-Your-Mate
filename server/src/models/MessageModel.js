const mongoose= require('mongoose');

const MessageSchema = new mongoose.Schema({
     text:{
        type: String,
        default: "",
     },

     imgURL:{
        type: String,
        default: "",
     },

     VideoURL:{
        type: String,
        default: "",
     },

     seen:{
        type:Boolean,
        default: false,
     }
},{
    timestamps: true,
});

const MessageModel = mongoose.model('Message',MessageSchema);

module.exports = MessageModel;