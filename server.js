const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const morgan = require('morgan')
const routes = require('./routes/api');





app.use(morgan('dev'));
mongoose.connect('mongodb+srv://suhaas02:suhaas02@cluster0.55ixi.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Database connected'))
.catch((error) => console.log("Error connecting to database"));
app.use('/api',routes);


//error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});

})

//listening for requests 
app.listen(3000, function(){
    console.log('App is ready to take requests');
});

