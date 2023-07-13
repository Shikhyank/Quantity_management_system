const express=require('express')
const app=express();
const db=require('./mysql')
const Item=require('./item')
const cors=require('cors')
app.use(cors())
app.use(express.json())

app.get('/',async (req,res)=>{
    const items = await Item.findAll();
    res.json(items)
})

app.post('/',async (req,res)=>{
    const body=req.body
    const response=await Item.create(body)
    res.json('item created succesfully')
})





db.sync().then((result) => { 
    app.listen(3000);
}).catch((err) => {
    console.log(err)
});
