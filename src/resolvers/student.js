import uuidv4 from "uuid/v4";

export default {
  Query: {
    students: () => {
      return Object.values(models.students);
    },
    student: (parent, { id }) => {
      return models.students[id];
    }
  },

  Mutation: {
    addStudent: (parent, { name }, { me, models }) => {
      const id = uuidv4();
      const student = {
        id,
        name,
        teacherId: me.id
      };
      models.students[id] = student;
      return student;
    },
    deleteStudent: (parent, { id }, {models}) => {
      const { [id]: student, ...otherStudents } = models.students;
      if (!student) {
        return false;
      }
      models.students = otherStudents;
      return true;
    }
  },
  Student: {
    teacher: (student, args, { models })=> {
      return models.teachers[student.teacherId];
    }
  }
};
