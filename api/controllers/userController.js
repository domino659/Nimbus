import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';


export function login(req, res) {
  console.log("Login");
  const { email, password } = req.body;
  console.log(email);
  if(email && password)
  {
    const values = [email, password];
    try{
      pool
          .query(
              `SELECT id, firstName, lastName FROM users WHERE email='${email}' AND password='${password}' LIMIT 1`)
          .then(response => {
            if (response.length > 0) {
              const token = jwt.sign({ id: response[0].id }, dotenv.config().parsed.JWT_SECRET);
              res.cookie('access_token', token)
              res.status(202).json({
                status:'Success',
                user: {
                  "lastName": response[0].lastName,
                  "firstName": response[0].firstName
                },
                token: token
              });
            }
            else{
              res.status(404).json({
                status:'Success',
                message : "User not found"
              });
            }
          })
    }
    catch (e)
    {
      res.status(400).json({
        status:'Failed',
        message:"Request failed"
      });
    }
  }else
  {
    res.status(406).json({
      status:'Failed',
      message:"Inputs missing"
    });
  }
}

export function register(req, res) {
  const { lastName, firstName, email, password, password_confirm } = req.body;

  if (email && firstName && lastName && password && password_confirm){
    if (password == password_confirm)
    {
      try
      {
        pool
            .query(`INSERT INTO users(email, lastname, firstname, password) VALUES('${email}', '${lastName}', '${firstName}', '${password}')`)
            .then(result => {
              login(req, res)
              /*res.status(201).json({
                status:'Success',
                message: "User added"
              });
               */
            });
      }
      catch (e)
      {
        res.status(400).json({
          status:'Failed',
          message:"Request failed"
        });
      }
    }
    else
    {
      res.status(400).json({
        status:'Failed',
        message:"Passwords not matching"
      });
    }
  }else{
    res.status(406).json({
      status:'Failed',
      message:"Inputs missing"
    });
  }
}
