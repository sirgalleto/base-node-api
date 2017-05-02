import config from 'config';
import express from 'express';
import expressConfig from './config/express';

const apiConfig = config.get('api');
const app = express();

expressConfig(app, apiConfig);

app.listen(apiConfig.port, apiConfig.host);
