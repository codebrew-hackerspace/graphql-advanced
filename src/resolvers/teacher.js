export default {
    Query: {
      teachers: (parent, args, { models }) => {
        return Object.values(models.teachers);
      },
      teacher: (parent, { id }, { models }) => {
        return models.teachers[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
  
    Teacher: {
      students: (teacher, args, { models }) => {
        return Object.values(models.students).filter(
          student => student.teacherId === teacher.id,
        );
      },
    },
  };
  