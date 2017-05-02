import config from 'config';
import express from 'express';

import { expressConfig, registerRoutes } from './config/express';
import dbConnection from './db/connection';
import routes from './app/routes';

const apiConfig = config.get('api');
const dbConfig = config.get('db');
const app = express();

dbConnection(dbConfig);
expressConfig(app, apiConfig);
registerRoutes(app, routes, apiConfig.prefix);

app.listen(apiConfig.port, apiConfig.host);
