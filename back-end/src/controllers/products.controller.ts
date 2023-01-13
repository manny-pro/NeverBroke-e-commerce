import { Request, Response } from 'express';
import products from '../database/models/products';
import { create } from '../services/products.service';
import { deleteById } from '../services/products.service';
import { updateById } from '../services/products.service';


async function getAll(req: Request, res: Response) {
  const Products = await products.findAll();
  res.send(Products);
}

async function getById(req: Request, res: Response) {
  const Products = await products.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (Products) {
    res.send({ Products });
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