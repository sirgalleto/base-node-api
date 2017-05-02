import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const apiConfig = config.get('api');
const app = express();

app.use(morgan(apiConfig.logStyle));

app.set('case sensitive routing', true);

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  next();
});

app.listen(apiConfig.port, apiConfig.host);
