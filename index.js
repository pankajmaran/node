const startupDebug=require('debug')('app:startup');
const dbDebug=require('debug')('app:db');

const config=require('config');
const helmet =require('helmet');
const Joi=require('joi');
const express= require('express');
const courses=require('./routes/courses');
const home=require('./routes/home')
const app= new express();


const logger=require('./middleware/logger');
app.use( express.json());
app.use(express.urlencoded({extend: true}) );
app.use(express.static('public'));
const morgan = require('morgan')
//3rd party middleware
app.use(helmet());

app.use('/api/courses', courses);
app.use('/', home);
//custom middle ware
// app.use(function log(req, req, next)
// {
//     console.log('log...');
//     next();
// });
 app.use(logger);
// app.use() 
console.log( process.env.NODE_ENV); // undefined  
console.log(app.get('env'));

if( app.get('env') === 'development')
{
    app.use(morgan('tiny'));
    //console.log('morgan enable');  
    startupDebug('morgan enable.....');
}
//db debuger
dbDebug('connect to db');
// configuration
console.log('application name '+ config.get('name'));
console.log('mail server '+ config.get('mail.host'));
// console.log('mail pswd '+ config.get('mail.password'));





//port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(` listeing on port ${port}`);
});

