const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const authroutes = require('./routes/auth');
app.use(express.json());
app.use('/api/auth',authroutes);
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/userdata")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

