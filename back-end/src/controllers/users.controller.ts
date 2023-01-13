import { Request, Response } from 'express';
import users from '../database/models/user';
import { create } from '../services/users.service';
import { deleteById } from '../services/users.service';
import { updateById } from '../services/users.service';


import jwt from 'jsonwebtoken';
import console from 'console';

async function auth(req: any, res: any) {
  console.log(req.query)
  let { username } = req.query;
  let { password } = req.query;

  const Users = {
    username,
    password,
  };

  if (!username) {
    username = 'undefined';
  }
  if (!password) {
    password = 'undefined';
  }


  const User = await users.findOne({ where: { username, password } });
  console.log(User)

  if (!User)  {
    console.log(username, password)
      return res.send({response: 'Username or password are wrong.'});
  }
  const accessToken = jwt.sign({ Users }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '48h'});
  res.send (accessToken);

}

async function getAll(req: Request, res: Response) {
  const User = await users.findAll();
  res.send(User);
}

async function getById(req: Request, res: Response) {
  const User = await users.findAll({
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

async function register(req: Request, res: Response) {
  create(req, res)
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  auth,
  register
};
