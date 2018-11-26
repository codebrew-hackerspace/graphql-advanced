import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    teachers: [Teacher!]
    teacher(id: ID!): Teacher
    me: Teacher
  }

  type Teacher {
    id: ID!
    name: String!
    students: [Student!]
  }
`;
