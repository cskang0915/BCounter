const userRouter = require("express").Router();
const database = require("../database");
const formValidate = require("../validation/formValidation");
const passwordValidate = require("../validation/passwordValidation");
const profileValidate = require("../validation/profileValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRequired = require("../middleware/authRequired");

require('dotenv').config()

userRouter.post("/register", (req, res) => {
  const {error, notValid} = formValidate(req.body);
  if (notValid) {
    return res.status(400).json({
      status: 400, 
      error
    });
  };
  
  const checkUser = `
  SELECT * FROM user
  WHERE user.username = ${req.body.username}
  AND user.email = ${req.body.email}`;

  database.all(checkUser, (err, checkedUser) => {
    if(checkedUser) {
      return res.status(400).json({
        status: 400,
        message: "username or email is already registered"
      });
    };

    bcrypt.genSalt(10, (err, salt) => {
      if(err) {
        return res.status(500).json({
          status: 500,
          message: "something went wrong. try again"
        });
      };

      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: "something went wrong. try again"
          });
        };

        const createNewUser = `INSERT INTO user VALUES (?, ?, ?, ?, ?)`;

        database.run(createNewUser, [req.body.first_name, req.body.last_name, req.body.username, req.body.email, hash], (err) => {
          if (err) {
            return res.status(500).json({
              status:500,
              message: "something went wrong. try again"
            });
          } else {
            res.status(201).json({
              status: 201, 
              message: "successfully registered"
            });
          };
        });
      });
    });
  });
});

userRouter.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: 400,
      message: "enter email and password"
    });
  };

  const checkUser = `
  SELECT *, rowid FROM user
  WHERE user.email = ?`;

  database.all(checkUser, [req.body.email], (err, checkedUser) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "something went wrong. try again"
      })
    } else if (checkedUser.length === 0) {
      return res.status(400).json({
        status: 400,
        message: "email or password is incorrect"
      })
    } else {
      bcrypt.compare(req.body.password, checkedUser[0].password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: "something went wrong. try again"
          })
        } else if (!isMatch) {
          return res.status(400).json({
            status: 400,
            message: "email or password is incorrect"
          })
        } else if(isMatch){
          let user = {
            id:checkedUser[0].rowid
          }
          jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "1hr"}, (err, signedJwt) => {
            if(err) {
              return res.status(500).json({
                status: 500,
                message: "something went wrong. try again"
              })
            } else {
              return res.status(200).json({
                status: 200,
                message: "successfully logged in",
                id: user,
                signedJwt
              });
            };
          });
        };
      });
    };
  });
});

userRouter.get("/info", authRequired, (req, res) => {
  const getOneUser = `
  SELECT user.first_name, user.last_name, user.username, user.email FROM user 
  WHERE user.rowid = ${req.userId}`;

  database.all(getOneUser, (err, user) => {
    if(err){
      return res.status(500).json({ 
        status: 500,
        message: "something went wrong. try again."
      });
    } else{
      return res.status(200).json({
        rowId: req.userId,
        user
      });
    };
  });
});

userRouter.put("/update/profile", authRequired, (req, res) => {
  const {error, notValid} = profileValidate(req.body);
  if (notValid) {
    return res.status(400).json({
      status: 400, 
      error
    });
  };
  
  const checkUser = `
  SELECT * FROM user
  WHERE user.username = ${req.body.username}
  AND user.email = ${req.body.email}`;

  database.all(checkUser, (err, checkedUser) => {
    if(checkedUser) {
      return res.status(400).json({
        status: 400,
        message: "username or email is already registered"
      });
    };

    const updateUser = `
    UPDATE user SET first_name = ?, last_name = ?, username = ?, email = ?
    WHERE user.rowid = ${req.userId}`;

    database.run(updateUser, [req.body.first_name, req.body.last_name, req.body.username, req.body.email], (err) => {
      if(err){
        return res.status(500).json({
          status: 500,
          message: "something went wrong. try again"
        });
      } else{
        return res.status(200).json({
          status: 200,
          message: "successfully updated user info"
        });
      };
    });
  });
});

userRouter.put("/update/password", authRequired, (req, res) => {
  const {error, notValid} = passwordValidate(req.body);
  if (notValid) {
    return res.status(400).json({
      status: 400, 
      error
    });
  };

  const checkUser = `
  SELECT * FROM user
  WHERE user.username = ${req.body.username}
  AND user.email = ${req.body.email}`;

  database.all(checkUser, (err, checkedUser) => {
    if(checkedUser) {
      return res.status(400).json({
        status: 400,
        message: "username or email is already registered"
      });
    };

    bcrypt.genSalt(10, (err, salt) => {
      if(err) {
        return res.status(500).json({
          status: 500,
          message: "something went wrong. try again"
        });
      };

      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: "something went wrong. try again"
          });
        };

        const updateUser = `
        UPDATE user SET password = ? WHERE user.rowid = ${req.userId}`;

        database.run(updateUser, [hash], (err) => {
          if(err){
            return res.status(500).json({
              status: 500,
              message: "something went wrong. try again"
            });
          } else{
            return res.status(200).json({
              status: 200,
              message: "successfully updated user info"
            });
          };
        });
      });
    });
  });
});

userRouter.delete("/delete", authRequired, (req, res) => {
  const deleteUser = `DELETE FROM user WHERE user.rowid = ${req.userId}`;

  database.run(deleteUser, (err) => {
    if(err){
      return res.status(500).json({
        status: 500,
        message: "something went wrong. try again"
      });
    } else{
      const deleteBudgetEntry = `
      DELETE FROM budget_entry
      WHERE budget_entry.userId = ${req.userId}`;

      database.run(deleteBudgetEntry, (err) => {
        if(err){
          return res.status(500).json({
            status: 500,
            message: "something went wrong. try again"
          });
        } else{
          return res.status(200).json({
            status: 200,
            message: "successfully deleted user and entry"
          });
        };
      });
    };
  });
});

module.exports = userRouter;