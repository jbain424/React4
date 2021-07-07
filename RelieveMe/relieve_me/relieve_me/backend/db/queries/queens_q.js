const db = require("./index.js");

const getAllLocations = (req, res, next) => {
  db.any("SELECT * FROM queens")
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Got Locations in Queens"
      });
    })
    .catch(err => next(err));
};


module.exports = { getAllLocations }
