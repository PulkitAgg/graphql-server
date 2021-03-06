const express = require('express');
var cors = require('cors')
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

app.use(cors())
mongoose.connect('mongodb://localhost:27017/graphql-ninja')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});