const express= require('express');
const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('hello, world!');
});

app.listen(3000,()=>{
    console.log('server started on port 3000')
});

app.post('/resources',(req,res)=>{
    const { name }=req.body;

    res.status(201).json({message:`create resource with name${name}`});
});

app.put('/resources/:id', (res,req)=>{
    const {id}=req.params;
    const {name}=req.body;

    res.joson({message:`Updated resource with ID ${id} and name${name}`});
});