// using Express JS and mongoose to connect to MongoDB
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');
    var path = require('path')
    var index = require('./api/index')
    var cors = require('cors')

// mongoose instance connection url connection with todoDB 
mongoose.connect('mongodb://localhost:27017/todoDB', {
    useMongoClient: true
});
//require('./api/models/todo');
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(cors())

//View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')))

// Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
//app.use('/api', tasks)
//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app from app.js
let initApp = require('./api/app');
initApp(app);


// Actively listening to port 3000 
app.listen(port);
console.log('Todo RESTful-API server started on: ' + port);