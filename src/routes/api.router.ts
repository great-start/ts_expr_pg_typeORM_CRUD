import { Router } from 'express';

import { userRouter } from './user.router';

const router = Router();

router.use('/users', userRouter);

// module.exports = apiRouter;
export const apiRouter = router;
