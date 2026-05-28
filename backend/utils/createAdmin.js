const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

const createAdmin = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected...');

    // Remove existing admin if any
    await User.deleteMany({ role: 'admin' });

    // Create fresh admin
    await User.create({
      name: 'Admin',
      email: 'admin@shreefrozenfood.com',
      password: 'admin123',
      role: 'admin'
    });

    console.log('✅ Admin account created!');
    console.log('   Email:    admin@shreefrozenfood.com');
    console.log('   Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();
