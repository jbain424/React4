const  db = require('./index.js');

const getAllBoards = (req, res, next) => {
  db.any('SELECT * FROM boards')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Got ALL Boards!"
    })
  })
  .catch(err => next(err))
}

const getOneBoard = (req, res, next) => {
  let boardId = parseInt(req.params.id)
  db.one('SELECT * FROM boards WHERE id=$1', boardId)
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Got ONE Board!'
    })
  })
  .catch(err => next(err))
};


const getAllBoardsFromOneUser = (req, res, next) => {
  let boardId = parseInt(req.params.id);
  db.any('SELECT * FROM boards WHERE user_id=$1', [boardId])
    .then(data => {
      res.status(200)
      .json({
        status: "success",
        data: data,
        message: "ALL Boards from Single User!",
      });
    })
    .catch(err => next(err));
};


const addOneBoard = (req, res, next) => {
  db.none('INSERT INTO pins (user_id, board_content, board_name) VALUES (${user_id}, ${board_content}, ${board_name})', req.body)
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Created A New Board!"
    });
  })
  .catch(err => next(err))
}


const updateOneBoard = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ")
  db.none(
      "UPDATE boards SET " + queryString + " WHERE id=" + req.params.id, req.body
    )
    .then(() => {
      res.status(200)
      .json({
        status: "success",
        message: "Updated a Board!!"
      });
    })
    .catch(err => next(err));
};

const deleteOneBoard = (req, res, next) => {
  let boardId = parseInt(req.params.id);
  db.result('DELETE FROM boards WHERE id=$1', boardId)
  .then((result) => {
    res.status(200)
  .json({
    status: 'success',
    message: 'This Board Has Been Deleted',
    result: result
  })
})
  .catch(err => next(err));
}



module.exports = { getAllBoards, getOneBoard, getAllBoardsFromOneUser, addOneBoard, updateOneBoard, deleteOneBoard };
