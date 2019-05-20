const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwt', { useNewUrlParser: true, useCreateIndex: true })
    .then(() => { console.log('Connected to db') });

app.use(express.json());

app.use('/', require('./routes/userRouter'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});