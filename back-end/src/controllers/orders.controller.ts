import { Request, Response } from 'express';
import order from '../database/models/order';
import { create } from '../services/orders.service';
import { deleteById } from '../services/orders.service';
import { updateById } from '../services/orders.service';

async function getAll(req: Request, res: Response) {
  const Order = await order.findAll();
  res.send(JSON.stringify(Order));
}

async function getById(req: Request, res: Response) {
  const Order = await order.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (Order) {
    res.send({ Order });
  } else {
    res.status(404).send({ error: 'NOT FOUND' });
  }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};