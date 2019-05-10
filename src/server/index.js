import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import mongoose from 'mongoose'

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //dataSources,
  context: () => ({
    db,
  }),
})

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`))
