const userRouter = require("express").Router();
const database = require("../database");
const validate = require("../validation/formValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.post("/register", (req, res) => {
  const {error, notValid} = validate(req.body)
  if (notValid) {
    return res.status(400).json({
      status: 400, 
      error
    })
  }
  
  const checkUser = `
  SELECT * FROM user
  WHERE user.username = ${req.body.username}
  AND user.email = ${req.body.email}`

  database.all(checkUser, (err, checkedUser) => {
    if(checkedUser) {
      return res.status(400).json({
        status: 400,
        message: "username or email is already registered"
      })
    }

    bcrypt.genSalt(10, (err, salt) => {
      if(err) {
        return res.status(500).json({
          status: 500,
          message: "something went wrong. try again"
        })
      }

      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: "something went wrong. try again"
          })
        }

        const createNewUser = `INSERT INTO user VALUES (?, ?, ?, ?, ?)`

        database.run(createNewUser, [req.body.first_name, req.body.last_name, req.body.username, req.body.email, hash], (err) => {
          if (err) {
            return res.status(500).json({
              status:500,
              message: "something went wrong. try again"
            })
          } else {
            res.status(201).json({
              status: 201, 
              message: "successfully registered"
            })
          }
        })
      })
    })
  })
})

module.exports = userRouter;