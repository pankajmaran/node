const express=require('express');
const router=express.Router();
router.get('/', (req, res)=>{
    // console.log('Heyyyy :)');
    res.send('Heyyyy :::))) ');
});

module.exports=router;