import express from 'express';
import {PORT , mongodbURL} from "./config.js"
import mongoose from 'mongoose';

const app=express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(200).send('Welcome to Project of mren')
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

mongoose.connect(mongodbURL).then(()=>{
    console.log(`App connected to database `);
})
.catch((error)=>{
    console.log(error);
})