const { MongoClient } = require("mongodb");
const config=require('../config');
const url = config.databaseUri;
const client = new MongoClient(url,{ useUnifiedTopology: true });
const dbName = "pollingDB";
module.exports=async ()=>{
    console.log("inside db function");
    await client.connect();
    console.log("Connected correctly to server");
    // console.log(client);
    return client.db(dbName);

        
    }

    // run().catch(console.dir);


// console.log(dbInstance);


