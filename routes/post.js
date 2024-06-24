const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/pin");
const PostSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:String,
    Description:String,
    image:String
});
module.exports = mongoose.model('post',PostSchema);