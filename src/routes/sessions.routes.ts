import { Router } from 'express';

import AuthenticationService from '../services/AuthenticateUserService';

import CreateUserService from '../services/CreateUserService';

const sessionsRouter = Router();
sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthenticationService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return res.json({ userWithoutPassword, token });
});

export default sessionsRouter;
