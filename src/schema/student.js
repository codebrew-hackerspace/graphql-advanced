import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    students: [Student!]!
    student(id: ID!): Student!
  }

  extend type Mutation {
    addStudent(name: String!): Student!
    deleteStudent(id: ID!): Boolean!
  }

  type Student {
    id: ID!
    name: String!
    teacher: Teacher!
  }
`;
