const express =require('express');
const  bodyParser = require('body-parser');
const cors = require('cors')
const {mongoose} = require('./db');
var employeeController = require('./controllers/employeeController');
var app =express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors({origin: true}));
app.listen(3000,()=> console.log('server started at port: 3000'));
 app.use('/employees',employeeController);
