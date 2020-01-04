import * as express from 'express';
import {Application} from "express";
import { getPerson } from './person.route';
const bodyParser = require('body-parser');
const cors = require('cors');

const app: Application = express();


app.use(cors());
app.use(bodyParser.json());



app.route('/api/user/:id').get(getPerson);

const httpServer = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



