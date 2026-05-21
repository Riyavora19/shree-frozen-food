const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('../models/Category');

dotenv.config();

const categories = [
  {
    name: 'Mango Pulp',
    description: 'Premium quality frozen mango pulp from ripe Alphonso and Kesar mangoes',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400',
    active: true
  },
  {
    name: 'Chikoo Pulp',
    description: 'Sweet and creamy frozen chikoo (sapota) pulp',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400',
    active: true
  },
  {
    name: 'Jambu Pulp',
    description: 'Fresh frozen jambu (rose apple) pulp with natural sweetness',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400',
    active: true
  },
  {
    name: 'Guava Pulp',
    description: 'Pure frozen guava pulp rich in vitamin C',
    image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400',
    active: true
  },
  {
    name: 'Mixed Fruit Pulp',
    description: 'Delicious blend of tropical fruit pulps',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400',
    active: true
  }
];

const seedCategories = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected...');

    // Clear existing categories
    await Category.deleteMany({});
    console.log('Existing categories cleared');

    // Insert new categories
    await Category.insertMany(categories);
    console.log('Categories seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding categories:', error);
    process.exit(1);
  }
};

seedCategories();
