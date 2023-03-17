import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import ssh from 'ssh2';

export function createProject(req, res) {
    const {projectName/* , token */} = req.body;
    
    try{

        /* jwt.verify(token, dotenv.config().parsed.JWT_SECRET, (err, decoded) => {
            if (err) {
              console.error(err);
            } else {
              console.log(decoded);
              userID = decoded.id
            }
        }); */
        userID = 1
        pool
            .query(
                `INSERT INTO projects(projectName, userID) VALUES('${projectName}', ${userID});`)
            .then(response => {
              if (response.length > 0) {
                
                pool
                    .query(
                        `CREATE DATABASE '${projectName}'; GRANT ALL PRIVILEGES ON ${projectName}.* TO (SELECT lastname FROM users WHERE id = ${userID})_(SELECT firstname FROM users WHERE id = ${userID})@localhost;`)
                    .then(response => {
                        console.log(response)
                    });


                res.status(202).json({
                  status:'Success',
                  project: {
                    
                  },
                });
              }
              else{
                res.status(404).json({
                  status:'Success',
                  message : ""
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
}