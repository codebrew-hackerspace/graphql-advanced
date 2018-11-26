export default {
    Query: {
      teachers: (parent, args, { models }) => {
        return Object.values(models.Teacher.find());
      },
      teacher: (parent, { id }, { models }) => {
        return models.Teacher.find()[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
  
    // Teacher: {
    //   students: (teacher, args, { models }) => {
    //     return Object.values(models.students).filter(
    //       student => student.teacherId === teacher.id,
    //     );
    //   },
    // },
  };
  