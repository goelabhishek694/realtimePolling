const{v4}=require('uuid');
module.exports=(dbInstance)=>{
    return async (request,response)=>{
        // console.log(client.db);
        // response.json({
        //     message:'it works'
        // })

        const data={
            _id:v4(),
            title:request.body.title,
            choice:request.body.choices.map(choice=>(
                {
                    name:choice,
                    count:0,
                    _id:v4()

                }
            ))
        }
        await dbInstance.collection('polls').insertOne(data);
        return response.json({
            message:'Poll created',
            pollId:data._id,
            data
        });
    }
}