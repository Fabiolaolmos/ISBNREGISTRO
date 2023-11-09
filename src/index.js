import express from 'express';

const app = express();
import constants from './config/constants';

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great
    `);
  }
});