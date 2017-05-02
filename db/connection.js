import mongoose from 'mongoose';

export default function ({ mongo }) {
  mongoose.connect(mongo.uri, mongo.options);

  mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });
}
