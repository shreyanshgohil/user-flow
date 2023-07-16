import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

const organizationRoutes = Router();

organizationRoutes.post('/create', async (req, res, next) => {
  const { organizationName, userId } = req.body;
  const organization = await prisma.organization.create({
    data: {
      tenantName: organizationName,
    },
  });

  const adminRole = await prisma.role.create({
    data: {
      roleName: 'admin',
      roleDescription: 'You are admin for this organization',
      isAdminRole: true,
    },
  });

  await prisma.organizationRole.create({
    data: {
      user: { connect: { id: userId } },
      organization: { connect: { id: organization.id } },
      role: { connect: { id: adminRole.id } },
    },
  });

  res.status(200).json({ org: organization });
});

organizationRoutes.get('/get-organizations', async (req, res, next) => {
  const { userId } = req.body;
  const organizations = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      organizations: {
        include: {
          organization: true,
          role: true,
        },
      },
    },
  });
  res.send(organizations);
});

export default organizationRoutes;
