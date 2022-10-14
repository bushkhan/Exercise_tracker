import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { APP_PORT, ATLAS_URI } from './config/index.js';

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(ATLAS_URI, { useNewUrlParser: true} );

const connection = mongoose.connection;
connection.on('error',console.error.bind(console,'connection error:'));
connection.once('open', () => {
    console.log('Connection estalished successfully');
});


//two routes created here directly without controllers execises and users
import exerciseRouter from './routes/exercise.js';
import userRouter from './routes/users.js';

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);


app.listen(APP_PORT,()=>{
    console.log(`Listening on port ${APP_PORT}`);
});