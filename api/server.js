import express from 'express';
import colors from "colors";
import morgan from 'morgan';
import cors from "cors";
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
dotenv.config();
const app = express();


// middlewares
app.use(bodyparser.urlencoded({extended: false}));
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

//server

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`Server is running on the ${PORT}`.green.bold.underline)
)