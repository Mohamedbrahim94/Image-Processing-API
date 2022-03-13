import express, { Request, Response } from 'express';
import routes from './utilities/routes/router';
import cors from 'cors';
import morgan from 'morgan';
import logger from './middlewares/logger';
const app = express();
const PORT = 3000;

//****MiddleWares*****

//static middleware type for serving static files used for storage
app.use(express.static('public'));

app.use(logger);

app.use(cors()); // to allow access control

//.json middleware type for parsing json incoming
app.use(express.json({ type: 'application/json' }));

//.urlencoded middleware type for parsing incomind urlencoded data
app.use(express.urlencoded({ extended: false }));

// main API route ( homepage API)
routes.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.sendFile(__dirname + '/utilities/routes/api/views/homePage.html');
});

app.listen(PORT, () => {
  console.log(`App Server is starting at http://localhost:${PORT}`);
});

app.use(routes);

// HTTP request logger middleware */
app.use(morgan('dev'));

export default app;
