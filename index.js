const config=require('config');
const helmet =require('helmet');
const Joi=require('joi');
const express= require('express');
const app= new express();
const logger=require('./logger');
app.use( express.json());
app.use(express.urlencoded({extend: true}) );
app.use(express.static('public'));
const morgan = require('morgan')
//3rd party middleware
app.use(helmet());




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
    console.log('morgan enable');  
}

// configuration
console.log('application name '+ config.get('name'));
console.log('mail server '+ config.get('mail.host'));


const courses=[
    { id :1, subject : 'c1'},
    { id :2, subject : 'c2'},
    { id :3, subject : 'c3'},
];
app.get('/', (req, res)=>{
    // console.log('Heyyyy :)');
    res.send('Heyyyy :::))) ');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});
app.get('/api/courses/:id/:subject', (req, res)=>{
    //var para=req.params;
    var course=courses.find( function(c){
       return  c.id === parseInt(req.params.id) && c.subject===req.params.subject;
    });
    if(!course) res.status(404).send(" course in not available");
    res.send(course);
    // res.send(req.params);
    
});
app.get('/api/courses/:id/:subject/:name', (req, res)=>{
    // var para=req.params;
    // res.send(para);
    res.send(req.query);
    
});
app.post('/api/courses', (req, res)=>{
    
    // if( undefined === req.body.subject  || req.body.subject.length <2)
    // {
    //     res.status(400).send('error in subject name'+ req.body.subject);
    //     return;
    // }
    const course={
         id : courses.length+1,
          subject: req.body.subject
        
    };
    
    const result= validateCourse(req.body);
    // console.log(result);
    if( result.error)
    {   
        res.status(400).send( result.error);
        return;
    }
    // var course=schema
    courses.push(course); 
    res.send(course);
});

app.put('/api/courses/:id', (req, res)=>{
    const course=courses.find( function(c){
        return  c.id === parseInt(req.params.id) ;
     });
     console.log(course);
    const result= validateCourse(course);
    console.log(result);
    if( result.error || !course )
    {   
        res.status(400).send( result.error);
        return;
    }
    // var course=schema
    // courses.push(course); 
    console.log("debug");
    course.subject=req.body.subject;
    res.send(course);
});
//port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(` listeing on port ${port}`);
});

function validateCourse(course)
{
    const schema=Joi.object({
        //  id: Joi.parseInt(),
        id:Joi.number(),
        subject : Joi.string().min(2).required()
    });
    const result = schema.validate(course);
    return result;
}
