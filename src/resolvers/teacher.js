export default {
    Query: {
      teachers: async (parent, args, { models }) => {
        return Object.values(await models.Teacher.find());
      },
      teacher: async (parent, { id }, { models }) => {
        return await models.Teacher.findById(id);
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
  };
  