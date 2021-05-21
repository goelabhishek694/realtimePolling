module.exports={
    databaseUri:process.env.DATABASE_URI || "mongodb+srv://realtimeVoting:realtimeVoting%402021@cluster0.qde56.mongodb.net/pollingDB?retryWrites=true&w=majority",
    port: process.env.PORT || 5000
}