const express=require('express')
const app=express();
const db=require('./mysql')
const Item=require('./item')
const cors=require('cors')
app.use(cors())
app.use(express.json())

app.get('/get-data',async (req,res)=>{
   try {
    const items = await Item.findAll();
    res.status(200)
    res.json(items)
    
   } catch (error) {
    res.status(404)
    
   }
})

app.post('/post-data',async (req,res)=>{
  try {
    const body=req.body
    const response=await Item.create(body)
    res.status(201).json('item created succesfully')
    
  } catch (error) {
    res.status(400).json(error)
    
  }
})


app.put("/put-data/:id",async(req,res)=>{
  const itemId = req.params.id
  Item.findByPk(itemId).then((item)=>{
    item.quantity=item.quantity-req.body.quantity
    return item.save();
  })
  .then((result)=>{
    res.json({message : 'Item updated successfully'})
  })
  .catch(err=>console.log(err))
})


//connect with db and port 

db.sync().then((result) => { 
    app.listen(3000);
}).catch((err) => {
    console.log(err)
});
