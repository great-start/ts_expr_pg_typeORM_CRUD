import { Request, Response } from 'express';

class UserController {
    getAll(req: Request, res: Response) {
        console.log(req.body);
        res.send('USER PAGE');
    }
}

export const userController = new UserController();
