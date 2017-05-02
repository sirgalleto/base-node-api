import mongoose from 'mongoose';
import logger from '../logger';

export default function ({ mongo }) {
  mongoose.connect(mongo.uri, mongo.options);

  mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });
}
