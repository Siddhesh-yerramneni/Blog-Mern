import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
const app = express();

app.use(express.json());

app.listen(3030, ()=> {
    console.log('Server is up and running on 3030');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);