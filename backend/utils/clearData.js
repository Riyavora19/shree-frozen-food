const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const clearData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected...');

    // Drop all collections
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
      console.log(`Cleared: ${collection.collectionName}`);
    }

    console.log('✅ All data cleared successfully!');
    console.log('You can now add your own products and categories from the admin panel.');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing data:', error);
    process.exit(1);
  }
};

clearData();
