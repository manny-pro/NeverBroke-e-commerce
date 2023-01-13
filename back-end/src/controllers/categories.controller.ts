import { Request, Response } from 'express';
import categories from '../database/models/categories';
import { create } from '../services/categories.service';
import { deleteById } from '../services/categories.service';
import { updateById } from '../services/categories.service';


async function getAll(req: Request, res: Response) {
  const Categories = await categories.findAll();
  res.send(JSON.stringify(Categories));
}

async function getById(req: Request, res: Response) {
  const Categories = await categories.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (Categories) {
    res.send({ Categories });
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