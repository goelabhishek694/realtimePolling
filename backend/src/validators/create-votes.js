const {validateAll}=require('indicative/validator');
module.exports=async (request,response,next)=>{
    try{
        await validateAll(request.body,{
            choice:'required'
        })
        //if it is validated, we move on 
        return next();
    }
    catch(errors){
        //The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
        return response.status(422).json(errors);
    }
}