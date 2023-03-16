import pool from '../config/db.js';

export function login(req, res) {
  const { email, password } = req.body;
  pool
    .query(
      `SELECT email FROM users WHERE email=${email} AND password=${password}`
    )
    .then((response, error) => {
      if (error) {
        res.send(error);
      }
      if (response.length > 0) {
        return res.render('login', {
          message: 'Connection failed',
        });
      }
    });
}

export function register(req, res) {
  const { lastName, firstName, email, password, password_confirm } = req.body;
 try{
    pool.query(`INSERT INTO Users(email, lastname, firstname) VALUES('${email}', '${lastName}', '${firstName}')`)
  }catch (e)
  {
    res.send("Register failed");
  }
}
