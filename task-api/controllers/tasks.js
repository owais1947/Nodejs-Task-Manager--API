const tasks = require('./../routes/tasks')
const TaskSchema = require('./../model/Task')
const Task = require('./../model/Task')

const getAllTasks =  async (req,res)=>{
try{
    const task = await Task.find({})
    res.status(200).json({task})
}catch(error){
    res.status(500).json({msg:error})
}

}
const createTasks = async (req,res)=>{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch(error){
     res.status(500).json({msg:error})
    }
}
    const getTasks = async (req,res)=>{
        try{
            const {id:taskId} =req.params
            const task = await Task.findOne({_id:taskId})
            if(!task){
                res.status(404).json({msg:'the ids are not correct'})
            }
            res.status(200).json({task})
        }
            catch(error){
                res.status(200).json({msg:error})
            }
        }
    
    const deleteTasks =  async(req,res)=>{
        try{
        const {id:taskId} = req.params
        const task =await Task.findOneAndDelete({_id:taskId})
        if(!task){
            res.status(404).json({msg:'the ids are not correct'})
        }
         res.status(200).json({task})
    }
        catch(error){
            res.status(500).json({msg:error})
        }
    
}
const updateTasks = async (req,res)=>{
    try{
 const {id:taskId}= req.params
 const task = await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true})
 if(!task){
    res.status(404).json({msg:'the ids are not correct'})
 }
 res.staus(200).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
            

module.exports = {getAllTasks,createTasks,updateTasks,deleteTasks,getTasks}