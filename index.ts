import express from 'express';
import MainRouter from './src/core/MainRouter';

const app = express();
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`The application is listening on port http://localhost:${port}`);
});