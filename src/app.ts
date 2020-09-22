import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helment from 'helmet'
import routes from './routes';

const app = express ();

app.use(helment());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
routes(app);

export default app;

