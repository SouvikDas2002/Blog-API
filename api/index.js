const express=require('express');
const app=express();
const dotenv=require("dotenv");
const mongoose=require('mongoose');
const authRoute=require('./routes/auth');

dotenv.config();
app.use(express.json());

//mongodb connection

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log("Connected to Mongodb"))
.catch((err)=> console.log(err));

app.use('/api/auth',authRoute);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})