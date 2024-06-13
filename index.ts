import express from 'express';
import MainRouter from './src/core/MainRouter';

const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1', MainRouter);

app.listen(port, () => {
  console.log(`Listening to: ${port}`);
});