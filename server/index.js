import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import dotenv, { config } from 'dotenv';
import Routes from './routes/route.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

//Cose ni error ni ave it's mean jyare frontend localhost30000 and backend localhost80000 ma chhe atle total 2 server vapray mate ERROR AVE...
app.use(cors());

app.use('/', Routes);
const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);
app.listen(PORT, () => console.log(`Server is Runing Successfully on PORT ${PORT}`));