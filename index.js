const Joi=require('joi');
const express= require('express');
const app= new express();
app.use( express.json());
// app.use()
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
    res.send("asdasdasdasd");
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
    const schema=Joi.object({
        subject : Joi.string().min(2).required()
    });
    const result = schema.validate(req.body);
    console.log(result);
    if( result.error)
    {   
        res.status(400).send( result);
        return;
    }
    // var course=schema
    courses.push(course); 
    res.send(course);
});
//port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(` listeing on port ${port}`);
});

