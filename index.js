const express= require('express');
const app= new express();

app.get('/', (req, res)=>{
    // console.log('Heyyyy :)');
    res.send('Heyyyy :::))) ');
});

app.get('/api/courses', (req, res)=>{
    res.send("asdasdasdasd");
});
app.get('/api/courses/:id/:subject', (req, res)=>{
    //var para=req.params;
    res.send(req.params);
    
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