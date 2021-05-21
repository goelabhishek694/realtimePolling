const express=require('express');
const config=require('./config');
const setupRouter=require('./setup/router');
const setupDatabase=require('./setup/databse');
const setupMiddleware=require('./setup/middleware');
// const setupRedis=require('./setup/redis');
const app=express();

setupMiddleware(app);
async function start(){
    const dbInstance=await setupDatabase();
    // const redisDB= await setupRedis();

// let dbInstance=setupDatabase.getDb();
// console.log(dbInstance);
    setupRouter(app,dbInstance);

    app.listen(config.port ,()=>{
        console.log("Server listening on port",config.port);
    });
}
start().catch(console.error)