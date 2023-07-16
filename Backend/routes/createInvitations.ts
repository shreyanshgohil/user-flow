import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

const createInvitationRoutes = Router();

createInvitationRoutes.post('/create', async (req, res, next) => {
  const { invitedBy, invitedTo, roleId, organizationId } = req.body;

  const response = await prisma.invitations.create({
    data: {
      invitedBy: { connect: { id: invitedBy } },
      invitedTo: { connect: { id: invitedTo } },
      invitationStatus: 'Pending',
      role: { connect: { id: roleId } },
      organization: { connect: { id: organizationId } },
    },
  });
  res.send(response);
});

createInvitationRoutes.get(
  '/get-invitation/:userId',
  async (req, res, next) => {
    const { userId } = req.params;
    // const response = await prisma.invitations.findFirst({
    //   where: {
    //     invitedToUserId: userId,
    //   },
    //   include: {
    //     role: true,
    //     organization: true,
    //     invitedBy: true,
    //   },
    // });
    const response = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        invitedTo: true,
      },
    });

    res.send(response);
  }
);

export default createInvitationRoutes;
