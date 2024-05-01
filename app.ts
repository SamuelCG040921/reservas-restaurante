import express from "express";
import bodyParser from 'body-parser';
import register from './routes/register';
import auth from './routes/auth';
import getReserves from "./routes/getReserves";
import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/allReserves', getReserves)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
