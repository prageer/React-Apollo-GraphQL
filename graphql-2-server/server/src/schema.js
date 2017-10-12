/*
export const typeDefs = `
type Channel {
   id: ID!                # "!" denotes a required field
   name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   channels: [Channel]    # "[]" means this is a list of channels
}
`;
*/

// src/schema.js

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

/* "!" denotes a required field*/

/*
 This type specifies the entry points into our API. In this case
 there is only one - "channels" - which returns a list of channels.
*/

const typeDefs = `
	type Channel {
	   id: ID!                
	   name: String
	}
	type Query {
	   channels: [Channel]    
	}
`;

//const schema = makeExecutableSchema({ typeDefs });
//addMockFunctionsToSchema({ schema });

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

