const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
const PostRoutes = require('./routes/post-route');

const port = process.env.PORT || 4000;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => console.log('DB is connected'),
  (err) => console.log(`Can't connect to DB ${err}`),
);

app.use(bodyParser.json());
app.use(cors());
app.use('/posts', PostRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));
