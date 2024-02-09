const db = require('../config/connection');
const { Presets } = require('../models');


const presetsData = require('./presetsData.json');

db.once('open', async () => {
  // clean database
  await Presets.deleteMany({});

  // bulk create each model
 // const presets = await Professor.insertMany(presetsData);

  await Presets.create(presetsData);


  console.log('all done!');
  process.exit(0);
});
