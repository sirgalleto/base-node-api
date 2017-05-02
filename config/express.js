import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export default function (app, config) {
  app.use(morgan(config.logStyle));

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
}
