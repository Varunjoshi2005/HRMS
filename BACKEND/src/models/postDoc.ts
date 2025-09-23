import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    caption: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },

    postContent: {
      url: {
        type: String,
        required: true,
      },
      contentType: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
