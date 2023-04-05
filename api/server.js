var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/db');
var cors = require('cors');

var port = 3000;

var app = express();
var userRoute = require('./routes/user.route');

mongoose.connect(config.dbURL);
/*(async() => {
    await mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://rooot:webd@cluster0.w8efj4b.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    });
    })();*/
mongoose.connection.on('connected',()=>{
    console.log('connected with mongo database')
})

mongoose.connection.on('error',()=>{
    console.log('Error with mongo database')
})
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname +'/public'));
app.use('/user',userRoute);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
    res.send("Hello Nodemon");
})

var server = http.createServer(app);
server.listen(port,()=>{

    console.log("Server has started on : " +port);
})