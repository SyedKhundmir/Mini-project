const express = require('express');
const router = express.Router();
const db = require('../models/schema');


router.get('/', async (req,res) => {
    try{
        const all_data = await db.find();
        res.json(all_data);
    }catch(err){
        res.send('Error' + err);
    }
})

router.get('/:hid', async (req,res) => {
    try{
        const data1 = await db.findById(req.params.hid);
        res.json(data1);
    }catch(err){
        res.send('Error' + err);
    }
})

router.post('/', async (req,res) => {
    const data = new db({
        hid : req.body.hid,
        ventilatorid : req.body.ventilatorid,
        status : req.body.status,
        name : req.body.name
    })

    try{
        const a1 =  await data.save()
        res.json(a1)
   }catch(err) {
       res.send("error1");
   }
})


router.patch('/:id', async (req,res)=>{
    try{
        const docUpdate = await db.findById(req.params.id);
        docUpdate.id = req.body.id ;
        const a2 = await docUpdate.save()
        res.json(a2)
    }catch(err){
        res.send("Error");
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const docDel = await db.findById(req.params.id);
        const a3 = await docDel.deleteOne();
        res.json(a3);
    }catch(err){
        res.send("Error");
    }
})




module.exports = router;
