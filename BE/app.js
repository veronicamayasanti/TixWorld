import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import createError from 'http-errors';
import bodyParser from 'body-parser';
const app = express();
import categoriesRouter from './app/api/v1/categories/router.js';
import imagesRouter from './app/api/v1/images/router.js';
import talentsRouter from './app/api/v1/talents/router.js';
import eventsRouter from './app/api/v1/events/router.js';
import organizersRouter from './app/api/v1/organizers/router.js';
import authCmsRouter from './app/api/v1/auth/router.js';

const v1 = '/api/v1/cms';

import notFoundHandler from './app/middlewares/not-found.js';
import errorHandlerMiddleware from './app/middlewares/handler-error.js';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to TixWorld'
  })
});

app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);
app.use(v1, eventsRouter);
app.use(v1, organizersRouter);
app.use(v1, authCmsRouter);


app.use(notFoundHandler);
app.use(errorHandlerMiddleware);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
