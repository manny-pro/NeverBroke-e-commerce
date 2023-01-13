import { Request, Response } from 'express';
import  { users } from '../database/models/user';

interface User {

  username: string,
  email: string,
  password: string
}

async function create(req: Request, res: Response) {

    const user = req.query as unknown as User;

    if (!user.username) {
      user.username = 'undefined';
    }
    if (!user.email) {
      user.email = 'undefined';
    }
    if (!user.password) {
      user.password
    }

    const result = await users.create({ username: user.username, email: user.email,password: user.password});
    console.log(result);

    res.send(result);
}

  
  async function updateById(req: Request, res: Response) {
    const User = await users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (User) {
      res.send(User);
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  async function deleteById(req: Request, res: Response) {
    const User = await users.destroy({ where: { id: req.params.id } });
    if (User) {
      res.send({ User });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  export {
    create,
    updateById,
    deleteById,
  };
