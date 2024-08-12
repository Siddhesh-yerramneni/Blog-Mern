import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
const app = express();

app.listen(3030, ()=> {
    console.log('Server is up and running on 3030');
});

app.use('/api/user', userRoutes);
