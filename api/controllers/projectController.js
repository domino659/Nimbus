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

        const getUserInfo = () => {
          return pool.query(`SELECT firstname, lastname FROM users WHERE id = ${userID}`, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results[0]);
              }
            });
        };

        getUserInfo()
        .then(userInfo => {
          const firstname = userInfo[0].firstname;
          const lastname = userInfo[0].lastname;
          const username = `${lastname}_${firstname}`;

            pool.query(`GRANT ALL PRIVILEGES ON ${projectName}.* TO '${username}'@'localhost'`)
              .then(response => {
                console.log(response)
                res.status(202).json({
                  status:'Success',
                  response: "Privileges accorded"
                });
             })
        })
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