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

router.get('/:id', async (req,res) => {
    try{
        const data1 = await db.findById(req.params.id);
        res.json(data1);
    }catch(err){
        res.send('Error' + err);
    }
})

router.post('/', async (req,res) => {
    const data = new db({
        hid : req.body.hid,
        name : req.body.name,
        location : req.body.location,
        address : req.body.address,
        contactNo : req.body.contactNo

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
        docUpdate.hid = req.body.hid ;
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
