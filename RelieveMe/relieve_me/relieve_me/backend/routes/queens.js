const express = require("express");
const router = express.Router();
const { getAllLocations } = require("../db/queries/queens_q.js");

router.get("/", getAllLocations);


module.exports = router;
