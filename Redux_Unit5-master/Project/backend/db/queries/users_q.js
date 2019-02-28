const  db  = require('./index.js');
const authHelpers = require('../../auth/helpers.js')

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM username')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Got ALL users!"
    })
  })
  .catch(err => next(err))
}

const getOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id)
  db.one('SELECT * FROM username WHERE id=$1', userId)
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Got ONE User!'
    })
  })
  .catch(err => next(err))
};


const addOneUser = (req, res, next) => {
  db.none('INSERT INTO username (username, email, profile_pic) VALUES (${username}, ${email}, ${profile_pic})', req.body)
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Created A New User!"
    });
  })
  .catch(err => next(err))
}


const updateOneUser = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ")
  db.none(
      "UPDATE username SET " + queryString + " WHERE id=" + req.params.id, req.body
    )
    .then(() => {
      res.status(200)
      .json({
        status: "success",
        message: "Updated a User!!"
      });
    })
    .catch(err => next(err));
};

const deleteOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM username WHERE id=$1', userId)
  .then((result) => {
    res.status(200)
  .json({
    status: 'success',
    message: 'This User Has Been Deleted',
    result: result
  })
})
  .catch(err => next(err));
}

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    'INSERT INTO username (username, password_digest, email, profile_pic) VALUES (${username}, ${password_digest}, ${email}, ${profile_pic})',
    { username: req.body.username,
      password_digest: hash,
      email: req.body.email,
      profile_pic: req.body.profile_pic }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      next(err);
    });
}
function logoutUser(req, res, next) {
  req.logout();
  res.status(200).json({ message: "Log Out Success" });
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.status(401).json({ err: "Nobody Logged In" });
  }
}





module.exports = { getAllUsers, getOneUser, addOneUser, updateOneUser, deleteOneUser, createUser, loginUser, logoutUser, isLoggedIn };
