const express = require('express');
const Post = require('../models/post');

const PostRoute = express.Router();

PostRoute.route('/add').post((req, res) => {
  const post = new Post();

  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(400).send('unable to save to db'));
});

PostRoute.route('/').get((req, res) => {
  Post.find((err, posts) => {
    if (err) console.log(err);
    else res.json(posts);
  });
});

PostRoute.route('/delete/:id').get((req, res) => {
  Post.findByIdAndRemove({ _id: req.params.id }, (err, posts) => {
    if (err) res.json(err);
    else res.json(req.params.id);
  });
});

module.exports = PostRoute;
