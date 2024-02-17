const db = require('../config/connection');
const { Presets, User, Campaign, PlayerSheet } = require('../models');

//const userData = require('./userData.json');
//const presetsData = require('./presetsData.json');
const campaignData = require('./campaignData.json');
const playerData = require('./playerData.json');

db.once('open', async () => {
  // clean database
  //await User.deleteMany({});
  await Campaign.deleteMany({});
  await PlayerSheet.deleteMany({});
  //await Presets.deleteMany({});

  // bulk create each model
 // const presets = await Professor.insertMany(presetsData);

 //await User.create(userData); 
 await Campaign.create(campaignData); 
 await PlayerSheet.create(playerData); 
 //await Presets.create(presetsData);


  console.log('all done!');
  process.exit(0);
});
