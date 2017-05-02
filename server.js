import config from 'config';
import express from 'express';

import expressConfig from './config/express';
import dbConnection from './db/connection';

const apiConfig = config.get('api');
const dbConfig = config.get('db');
const app = express();

dbConnection(dbConfig);
expressConfig(app, apiConfig);

app.listen(apiConfig.port, apiConfig.host);
