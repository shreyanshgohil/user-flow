import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

const createRoleRoutes = Router();

export default createRoleRoutes;
