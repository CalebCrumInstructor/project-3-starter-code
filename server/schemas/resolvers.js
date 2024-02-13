const { User, Campaign, Presets } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { dateScalar } = require('./scalar');

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await User.findById(context.user._id)
    },
    campaign: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await Campaign.findById(args._id)
    },
    allCampaigns: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await Campaign.find()
    },
    allCampaignsByUser: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await Campaign.find({
        owner: context.user._id
      })
    },
    presets: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const data = await Presets.find()

      console.log(data);

      return data;
    },
  },
  Mutation: {
    addUser: async (parent, argObj) => {
      try {
        const user = await User.create(argObj);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
        throw UserInputError
      }
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addCampaign: async (parent, argObj) => {
      try {
        const campaign = await Campaign.create(argObj);
        return { campaign };
      } catch (err) {
        console.log(err);
        throw CreateCampaignError;
      }
    },
    createCampaign: async (_, { name, description }, context) => {
      try {
        const campaign = await Campaign.create({ name, description, owner: context.user._id });
        return campaign;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to create campaign');
      }
    },
    addPresets: async (parent, argObj) => {
      try {
        const presets = await Presets.create(argObj);
        return { presets };
      } catch (err) {
        console.log(err);
        throw CreatePresetsError;
      }
    }
  }
};

module.exports = resolvers;
