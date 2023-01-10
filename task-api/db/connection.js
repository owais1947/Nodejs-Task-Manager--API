const mongoose = require('mongoose')

const connectionString = ' mongodb+srv://nismoowais1:Owais@123@nodejs.jb94vd5.mongodb.net/03-task-manager?retryWrites=true&w=majority'

const connectDB = (url)=>{
   return mongoose.connect(url, 
        { useNewUrlParser: true }, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })

}

module.exports = connectDB