import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: "Post",
        require: true
    }

})


export const Comment = mongoose.model('Comment', CommentSchema);

