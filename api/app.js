import express from 'express';
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';
import apiRoutes from "./routes/apiRoutes.js";
import cookieParser from 'cookie-parser';
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Home Route');
});


var corsOptions = {
  credentials: true,
  /* origin: `http://localhost:${port}` */
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/', apiRoutes);

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
