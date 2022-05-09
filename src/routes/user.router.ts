import { Router } from 'express';

import { userController } from '../controllers';

const router = Router();

router.get('/', userController.getAll);

// module.exports = userRouter;
// export const userRouter =  userRouter;
export const userRouter = router;
