import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
