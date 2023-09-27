const postSchema = new mongoose.Schema({
    // Other fields related to your post
    title: {
      type: String,
      required: true
    },
    content: {      type: mongoose.Schema.Types.ObjectId, // Assuming you have a User schema
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    tags: {
      type: [String],
    }, // An array of tags associated with the post
    imageURLs: {
      type: [String],
    }, // An array of image URLs associated with the post
    contributors: [{
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
    }],
    githubURL: {
      type: String,
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Comment',
    }
  });
const Post = mongoose.model('Post', postSchema);

module.exports = Post;