module.exports=(dbInstance)=>{
    return async (request,response)=>{
        // console.log(request.params);
        const pollResult=await dbInstance.collection('polls').findOne({
            _id:request.params.poll
        });

        // console.log(pollResult);
        return response.json(pollResult);
    }  
}