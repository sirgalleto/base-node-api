import config from 'config';
import winston from 'winston';

const loggerConfig = config.get('logger');

export default new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(loggerConfig),
  ],
});
