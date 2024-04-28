import express from 'express';
import {PORT , mongodbURL} from "./config.js"
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app=express();

app.use(express.json());

app.use(cors());
//Middleware for handling CORS POLICY  

// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods:['POST','GET','PUT','DELETE'],
//         allowedHeaders:['contet-type'],
//     })
// );


app.get('/',(request,response)=>{
    console.log(request);
    return response.status(200).send('Welcome to Project of mern')
})

app.use('/books',bookRoute);

mongoose.connect(mongodbURL).then(()=>{
    console.log(`App connected to database `);
    app.listen(PORT,()=>{ 
        console.log(`Server listening on port ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
});

