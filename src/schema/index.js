import { gql } from 'apollo-server-express';
import teacherSchema from './teacher';


const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

// export default [linkSchema, teacherSchema, studentSchema];
export default [linkSchema, teacherSchema];
