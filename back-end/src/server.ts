import { router as productsRouter } from './routes/products.route';
import { router as categoriesRouter } from './routes/categories.route';
import { router as ordersRouter } from './routes/orders.route';
import { router as usersRouter } from './routes/users.route';
const cors = require('cors');
import express from 'express';

import 'dotenv/config'

const app = express();
app.disable('x-powered-by');
const port = 3018;

app.use(
  cors ({
    origin: "*",
  })
)

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);


app.get('/', (req:any, res:any) => {
  console.log(req.query);
  res.send('you are connnected');
});

app.post('/', (req:any, res:any) => {
  console.log(req.query);
  res.send('I am a POST request');
});

app.listen(port, () => {
  console.log(`SERVER LISTENING ON ${port}`);
});

