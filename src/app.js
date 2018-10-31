require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const volleyball = require('volleyball');
const mongoose = require('mongoose');

const todoRouter = require('./todos/routes/todo.route');

const app = express();

mongoose.connect('mongodb://localhost:27017/todos',{useNewUrlParser: true});

let port = 3000; // process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(volleyball);
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/todos', todoRouter);

app.listen(port, ()=>{
    console.log(`Application running at http://localhost:${port}....`);
});