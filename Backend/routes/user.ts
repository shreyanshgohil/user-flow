import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

const userRoutes = Router();

userRoutes.post('/register', async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  const response = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
      isVerified: true,
    },
  });

  res.status(200).send(response);
});

userRoutes.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (user?.password === password) {
    res.status(200).json({ user });
  } else {
    res.status(401).json({ user: null });
  }
});

export default userRoutes;
