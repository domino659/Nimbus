import connect_db from "../test.js";
const conn = connect_db();
console.log(conn);
export function login(req, res) {
  const { email, password } = req.body;
  connect_db().query(`SELECT email FROM users WHERE email=${email} AND password=${password}`, async (error, res) => {
    if( result.length > 0 ) {
      return res.render('login', {
        message: 'Connection failed'
      })
    }
  })
}

export function register(req, res) {
  const { lastName, firstName, email, password, password_confirm } = req.body;
  /*connect_db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "Select * from Users";
    connect_db.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
   */
  conn.query("SELECT * FROM Users", async (error, res) => {
    console.log(res)
  });
  conn.end();
}