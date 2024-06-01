import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import session from 'express-session';
import passport from './config/passport';
import userRoutes from './routes/user-routes';
import animalRoutes from './routes/animal-routes';
import authRoutes from './routes/auth-routes';

dotenv.config();  // Certifique-se de carregar as variáveis de ambiente

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api/users', userRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
