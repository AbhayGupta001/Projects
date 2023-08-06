const express = require('express');

//express router import kro 
const router = express.Router();

//controller import kro 
const { createTodo } = require('../controllers/createTodo');
const { getTodo } = require('../controllers/getTodo');
const { updateTodo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');

// ab route define kro
router.post("/createTodo",createTodo);
router.get("/getTodos/",getTodo);
router.get("/getTodos/:id",getTodo);
router.put("/updateTodos/:id",updateTodo);
router.delete("/deleteTodos/:id",deleteTodo);
//iska mtlb hai ki agar koi post request aati hai is route pr toh Router use handle krega creteTodo controller ki help se

// ab export krdo router ko 
module.exports = router;