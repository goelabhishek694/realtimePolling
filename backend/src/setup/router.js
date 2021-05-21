const Router=require('express').Router;
const createPolls=require('../handlers/create-polls');
const createVotes=require('../handlers/create_votes');
const getPoll=require('../handlers/get-poll');
const creatPollsValidator=require('../validators/create-polls');
const creatVotesValidator=require('../validators/create-votes');
module.exports=(app,dbInstance,redisDB)=>{
    const router=new Router();
    //when post request is being set, we need to make sure that all the information required in the form to create poll is there, we validate it through creatPollsValidator. it is a middleware function, if the validation goes through then only createPolls function is called else error is returned. 
    router.post('/polls', creatPollsValidator,createPolls(dbInstance));

    //put request
    router.put('/polls/:poll',creatVotesValidator,createVotes(dbInstance));

    router.get('/polls/:poll',getPoll(dbInstance));
    app.use(router);
}