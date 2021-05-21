const {validateAll}=require('indicative/validator');

module.exports=async(request,response,next)=>{
    try{
        // this is to ensure that the post request submitted to create polls have the title of the poll and the choices given in the poll should be there and minimum 2 choices should be there  
        await validateAll(request.body,{
            title:'required',
            choices:'required|array|min:2',
            // all the elements in choices array is requires and is of string and cant be null or empty
            'choices.*':'required|string'
        })
        //if it is validated, we move on 
        return next();
    }
    catch(errors){
        //The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
        return response.status(422).json(errors);
    }
}