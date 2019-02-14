const express = require('express');
const router = express.Router();
const { getAllBoards, getOneBoard, getAllBoardsFromOneUser, addOneBoard, updateOneBoard, deleteOneBoard } = require('../db/queries/boards_q.js');

router.get('/', getAllBoards);
router.get('/:id', getOneBoard);
router.get('/:id/boards', getAllBoardsFromOneUser);
router.post('/', addOneBoard);
router.patch('/:id', updateOneBoard);
router.delete('/:id', deleteOneBoard);


module.exports = router;
