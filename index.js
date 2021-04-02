const express= require('express');
const app= new express();
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
//port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(` listeing on port ${port}`);
});