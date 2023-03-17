import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import ssh from 'ssh2';

export function login(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  if (email && password) {
    try {
      pool
        .query(
          `SELECT id, firstName, lastName FROM users WHERE email='${email}' AND password='${password}' LIMIT 1`
        )
        .then((response) => {
          if (response.length > 0) {
            const token = jwt.sign(
              { id: response[0].id },
              dotenv.config().parsed.JWT_SECRET
            );
            res.cookie('access_token', token);
            res.status(202).json({
              status: 'Success',
              user: {
                lastName: response[0].lastName,
                firstName: response[0].firstName,
              },
              token: token,
            });
          } else {
            res.status(404).json({
              status: 'Failed',
              message: 'User not found',
            });
          }
        });
    } catch (e) {
      res.status(400).json({
        status: 'Failed',
        message: 'Request failed',
      });
    }
  } else {
    res.status(406).json({
      status: 'Failed',
      message: 'Inputs missing',
    });
  }
}

export function register(req, res) {
  const { lastName, firstName, email, password, passwordConfirm } = req.body;

  if (email && firstName && lastName && password && passwordConfirm) {
    if (password == passwordConfirm) {
      try {
        pool
          .query(`INSERT INTO users(email, lastname, firstname, password) VALUES('${email}', '${lastName}', '${firstName}', '${password}')`)
          .then(result => {
            login(req, res)
            createUserServer(lastName, firstName, password)
            });
        pool
          .query(`CREATE USER '${lastName}_${firstName}'@localhost IDENTIFIED BY '${password}';`)
          .then(result => {console.log(result)})
      }
      catch (e)
      {
        res.status(400).json({
          status: 'Failed',
          message: 'Request failed',
        });
      }
    } else {
      res.status(400).json({
        status: 'Failed',
        message: 'Passwords not matching',
      });
    }
  } else {
    res.status(406).json({
      status: 'Failed',
      message: 'Inputs missing',
    });
  }
}

function createUserServer(lastName, firstName, password) {
  const Client = ssh.Client;
  var lastname = lastName;
  var firstname = firstName;
  var username = lastName + '_' + firstName;
  //decrypt password password
  var password = password
  const conn = new Client();

  conn.connect({
    host: '13.74.242.210',
    port: 22,
    username: 'groupe7',
    password: 'hetic2023groupe7ZB!',
  });

  conn.on('ready', () => {
    console.log('Connection ready');

    conn.exec(
      'sh /opt/bin/scripts/useradd.sh ' + username + ' ' + password,
      (err, stream) => {
        if (err) throw err;
        stream
          .on('close', (code, signal) => {
            console.log(`Script exit code: ${code}`);
            conn.end();
          })
          .on('data', (data) => {
            console.log(`Output: ${data}`);
          })
          .stderr.on('data', (data) => {
            console.log(`Error: ${data}`);
          });
      }
    );
  });
}