import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import ssh from 'ssh2';

export function createProject(req, res) {
/*     const {projectName, token} = req.body;*/

    const projectName = req.body.projectName;  
     
    try{

        /* jwt.verify(token, dotenv.config().parsed.JWT_SECRET, (err, decoded) => {
            if (err) {
              console.error(err);
            } else {
              console.log(decoded);
              var userID = decoded.id
            }
        }); */
        var userID = 2;
        pool
          .query(
              `INSERT INTO projects(projectName, userID) VALUES('${projectName}', ${userID});`)
          .then(response => {
            console.log(response)
          })
          
        pool
          .query(
              `CREATE DATABASE IF NOT EXISTS ${projectName}`)
          .then(response => {
            console.log(response)
          });

        pool
          .query(
            `GRANT ALL PRIVILEGES ON ${projectName}.* TO '(SELECT lastname FROM users WHERE id = ${userID})_(SELECT firstname FROM users WHERE id = ${userID})'@'localhost';`)
          .then(response => {
              res.status(202).json({
                status:'Success',
                response: response
              });
          });
      }
      catch (e)
      {
        res.status(400).json({
          status:'Failed',
          message:{
            projectName : projectName,
            userID : userID
          }
        });
      }
}