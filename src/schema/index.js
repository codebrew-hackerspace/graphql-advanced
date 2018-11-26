import { gql } from 'apollo-server-express';

// import userSchema from './user';
// import messageSchema from './message';

import teacherSchema from './teacher';
// import studentSchema from './student';


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
