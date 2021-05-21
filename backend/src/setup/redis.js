// const redis=require('redis');
// module.exports=()=>{
//     const redisClient=redis.createClient();
//     // redisClient.on('connect', function(){
//     //     console.log('Connected to Redis');
//     //     return redisClient;
//     // });
    
//     redisClient.on('error', function(err) {
//          console.log('Redis error: ' + err);
//     });
//     redisClient.set("key", "value", redis.print);
//     redisClient.get("key", redis.print);


//     return redisClient;
// }