import { Request, Response } from 'express'

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line @typescript-eslint/ban-types
export function authenticateJWT(req: Request, res: Response, next: Function) {
    const token = req. headers. authorization;
    if (!token) return res.sendStatus (403);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    jwt.verify(token, process.env.TOKEN!, (err) => {
        console.log(err)
        if (err) return res.sendStatus (401);
        next();
    });
}

export function generateAccessToken (user: string | object | Buffer) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return jwt.sign(user, process.env.TOKEN!, { expiresIn: '18005' });
}