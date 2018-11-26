import 'dotenv/config';
import cors from 'cors';
import uuidv4 from 'uuid/v4';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://aria:malkani28@ds149593.mlab.com:49593/graphql-advanced';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

const app = express();

app.use(cors());

const me = {
  id: "1",
  name: "Admin",
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
