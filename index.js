let express=require("express");
let app=express();
let port=2500;
app.listen(port,()=>{
    console.log(`currently working on port number ${port}`);
})

app.get("/addition",(req,res)=>{
    let {q}=req.query;
    res.send(`Addition page is currently working with query parameters : ${q}`);
})

app.get("/multiplication",(req,res)=>{
    let {q}=req.query;
    res.send(`Multiplication page is currently working with query parameters : ${q}`);
})

app.get("/subtraction",(req,res)=>{
    let {q}=req.query;
    res.send(`Subtraction page is currently working with query parameters : ${q}`);
})

app.get("/division",(req,res)=>{
    let {q}=req.query;
    res.send(`Division page is currently working with query parameters : ${q}`);
})
