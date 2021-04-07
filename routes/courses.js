
const Joi=require('joi');
const express= require('express');
const router=  express.Router() ;

const courses=[
    { id :1, subject : 'c1'},
    { id :2, subject : 'c2'},
    { id :3, subject : 'c3'},
];
router.get('/', (req, res)=>{
    res.send(courses);
});
router.get('/:id/:subject', (req, res)=>{
    //var para=req.params;
    var course=courses.find( function(c){
       return  c.id === parseInt(req.params.id) && c.subject===req.params.subject;
    });
    if(!course) res.status(404).send(" course in not available");
    res.send(course);
    // res.send(req.params);
    
});
router.get('/:id/:subject/:name', (req, res)=>{
    // var para=req.params;
    // res.send(para);
    res.send(req.query);
    
});
router.post('/', (req, res)=>{
    
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

router.put('/:id', (req, res)=>{
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
module.exports = router;