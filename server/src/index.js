const express = require("express");
var bodyParser = require('body-parser');
const route = require('./route/route.js');
const app = express();
const cors = require('cors')

app.use(cors())



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Abhishek0186:7SIIHhKFk1Vsyl1o@thoriumbackend.izyvo.mongodb.net/groupXDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 5000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 5000))
});