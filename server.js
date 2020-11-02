const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');
// import typeDefs and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers =  require('./resolvers.js');

// import the env variables to use the env files
require('dotenv').config({path:'variables.env'})
const User = require('./models/User');
const Post = require('./models/Post');

//connect to the mongodb
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(()=> console.log("DB Connected"))
    .catch(err => console.error(err))

//create Apollo/graphQL server using typeDefs, Resolvers and Context
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        User, 
        Post
    },
});
server.listen().then(({url}) => {
    console.log(`Server listening on ${url}`)
});