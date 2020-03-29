const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    collection: 'posts',
  },
);

module.exports = mongoose.model('Post', Post);
