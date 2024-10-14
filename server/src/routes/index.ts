import express, { Router } from 'express';
import { createUserHandler } from '../controllers/create.controllers';
import { getUsersHandler } from '../controllers/get.controllers';
import { getUserHandler } from '../controllers/find.controllers';
import { updateUserHandler } from '../controllers/update.controllers';
import { deleteUserHandler } from '../controllers/delete.controllers';

const router: Router = express.Router();

// these route for basic crud
router.post('/create', createUserHandler);
router.get('/users', getUsersHandler);
router.post('/find', getUserHandler);
router.put('/update', updateUserHandler);
router.delete('/delete', deleteUserHandler);

export { router };
