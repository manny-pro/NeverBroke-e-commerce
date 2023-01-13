import { Request, Response } from 'express';
import categories from '../database/models/categories';


async function create(req: Request, res: Response) {
    const Categories = await categories.create(req.body);
    res.send({ Categories });
  }
  
  async function updateById(req: Request, res: Response) {
    const Categories = await categories.update(req.body, {
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
  
  async function deleteById(req: Request, res: Response) {
    const Categories = await categories.destroy({ where: { id: req.params.id } });
    if (Categories) {
      res.send({ Categories });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }

  export {
    create,
    updateById,
    deleteById,
  };