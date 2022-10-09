const express=require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj={
        a:"aaaaaaaaaaaa",
        number:1111111
    }
    res.json(obj);
})

module.exports=router