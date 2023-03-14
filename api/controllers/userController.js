const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default function login(req, res) {
  const { email, password } = req.body;
  db.query(`SELECT email FROM users WHERE email=${email} AND password=${password}`, async (error, res) => {
    if( result.length > 0 ) {
      return res.render('login', {
        message: 'Connection failed'
      })
    }
  })
}

export default function register(req, res) {
  const { lastName, firstName, email, password, password_confirm } = req.body;
  db.query('SELECT email FROM users WHERE email = ?', [email], async (error, res) => {
    if( result.length > 0 ) {
      return res.render('register', {
        message: 'This email is already in use'
      })
    } else if(password !== password_confirm) {
      return res.render('register', {
        message: 'Passwords do not match!'
      })
    }
  })
}