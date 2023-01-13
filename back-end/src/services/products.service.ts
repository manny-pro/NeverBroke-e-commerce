import { Request, Response } from 'express';
import products from '../database/models/products';

async function create(req: Request, res: Response) {
    const Products = await products.create(req.query);
    res.send({ Products });
  }
  
  
  async function updateById(req: Request, res: Response) {
    const Products = await products.update(req.body, {
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
  
  async function deleteById(req: Request, res: Response) {
    const Products = await products.destroy({ where: { id: req.params.id } });
    if (Products) {
      res.send({ Products });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  export {
    create,
    updateById,
    deleteById,
  };