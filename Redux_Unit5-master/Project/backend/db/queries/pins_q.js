const  db  = require('./index.js');

const getAllPins = (req, res, next) => {
  db.any('SELECT * FROM pins')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Got ALL pins!"
    })
  })
  .catch(err => next(err))
}

const getOnePin = (req, res, next) => {
  let pinId = parseInt(req.params.id)
  db.one('SELECT * FROM pins WHERE id=$1', pinId)
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Got ONE Pin!'
    })
  })
  .catch(err => next(err))
};

const getAllPinsFromOneUser = (req, res, next) => {
  let pinId = parseInt(req.params.id);
  db.any('SELECT * FROM pins WHERE user_id=$1', [pinId])
    .then(data => {
      res.status(200)
      .json({
        status: "success",
        data: data,
        message: "ALL Pins from Single User!",
      });
    })
    .catch(err => next(err));
};


const addOnePin = (req, res, next) => {
  db.none('INSERT INTO pins (user_id, board_id, pin_name, pin_url) VALUES (${user_id}, ${board_id}, ${pin_name}, ${pin_url})', req.body)
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Created A New Pin!"
    });
  })
  .catch(err => next(err))
}


const updateOnePin = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ")
  db.none(
      "UPDATE pins SET " + queryString + " WHERE id=" + req.params.id, req.body
    )
    .then(() => {
      res.status(200)
      .json({
        status: "success",
        message: "Updated a Pin!!"
      });
    })
    .catch(err => next(err));
};

const deleteOnePin = (req, res, next) => {
  let pinId = parseInt(req.params.id);
  db.result('DELETE FROM pins WHERE id=$1', pinId)
  .then((result) => {
    res.status(200)
  .json({
    status: 'success',
    message: 'This Pin Has Been Deleted',
    result: result
  })
})
  .catch(err => next(err));
}



module.exports = { getAllPins, getOnePin, getAllPinsFromOneUser, addOnePin, updateOnePin, deleteOnePin };
