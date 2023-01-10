const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const connectDB = require('./db/connection')
require('dotenv').config()
//middleware
app.use(express.json(

))

//routes
app.get('/',(req,res)=>{
res.end("the application is working")
})


app.use('/api/v1/tasks',tasks)

const port = 3000;
const start = async ()=>{
    try{
   await connectDB(process.env.MONGO_URI)
   app.listen(port,console.log(`server is listening on the port ${port}...`))
    }catch(error){
   console.log(error)
    }
}

start()
// app.listen(port,console.log(`server is listening on the port ${port}...`))
