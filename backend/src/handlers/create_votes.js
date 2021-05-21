const{v4}=require('uuid');
// const {promisify} = require('util');
module.exports=(dbInstance)=>{

    // const saddAsync=promisify(redisDB.sadd).bind(redisDB);
    


    return async (request,response)=>{
        // console.log(request.params);
        const result=await dbInstance.collection('polls').updateOne({
            _id:request.params.poll,
            'choice._id':request.body.choice
        },{
            $inc:{
                 'choice.$.count':1
            }
        })
        //{poll-id:[1.34.563,1.56.789.3]}
        // await saddAsync(request.params.poll,request.body.ip);
        console.log(result);
        return response.json({
            message:'Vote has been registred.'
        });
    } 
}  