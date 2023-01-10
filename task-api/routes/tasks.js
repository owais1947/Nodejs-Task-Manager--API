const express = require('express')
const {getAllTasks, createTasks, updateTasks, deleteTasks,getTasks} = require('../controllers/tasks')
const router = express.Router()


router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks);











module.exports = router