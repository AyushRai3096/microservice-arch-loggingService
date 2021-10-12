const express = require('express');
const receiverMessagesFromQueue = require('./receiver');

const app = express();

//define port 
var port = process.env.PORT || 9000;

//start server
app.listen(port)
//queue listener
receiverMessagesFromQueue()