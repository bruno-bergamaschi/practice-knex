import { Router } from "express";

import { getAll } from './../controllers/users';

export const usersRouter = Router();

usersRouter.get('/get-all-users', getAll);
