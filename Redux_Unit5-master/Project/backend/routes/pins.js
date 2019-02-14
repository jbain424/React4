const express = require('express');
const router = express.Router();
const { getAllPins, getOnePin, getAllPinsFromOneUser, addOnePin, updateOnePin, deleteOnePin } = require('../db/queries/pins_q.js');

router.get('/', getAllPins);
router.get('/:id', getOnePin)
router.get('/:id/pins', getAllPinsFromOneUser)
router.post('/', addOnePin)
router.patch('/:id', updateOnePin)
router.delete('/:id', deleteOnePin)


module.exports = router;
