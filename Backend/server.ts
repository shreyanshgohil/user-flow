import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user';
import organizationRoutes from './routes/organization';
import createInvitationRoutes from './routes/createInvitations';
// For initial express initialization
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());

app.use('/user', userRoutes);
app.use('/organization', organizationRoutes);
app.use('/invitation', createInvitationRoutes);

app.listen(5000, () => console.log('server is started on the port 5000'));
