const {
  login,
  register
} = require ('../controllers/userController.js');

app.get("/login", login);
app.get("/register", register);