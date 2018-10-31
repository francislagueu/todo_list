const Todo = require('../models/todo.model');

const GetAllTodos = async (req, res) => {
    const todos = await Todo.find({});
   return res.status(200).json({todos});
}

const GetTodo = async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findById({_id: id});
    return res.status(200).json({todo});
}

const CreateTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    await todo.save();
    return res.status(201).json({todo});
}

const UpdateTodo = async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findByIdAndUpdate({_id:id}, req.body);
    return res.status(200).json({todo});
}

const DeleteTodo = async (req, res) => {
    const {id} = req.params;
    await Todo.findByIdAndRemove({_id: id});
    return res.status(200).json({message: 'Todo successfully deleted'});
}

module.exports = {GetAllTodos, GetTodo, CreateTodo, UpdateTodo, DeleteTodo};