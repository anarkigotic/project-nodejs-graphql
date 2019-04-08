import express from 'express';
import graphqlHTTP from "express-graphql"; //midleware de node
import schema from './schema';
import { connect } from './database';

const app = express();
connect();


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context :{
        messageId:'test'
    }
}));

app.listen(3000, () => {
    console.log('server on port 3000');
});