const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Product = require('../models/Product');
const Inquiry = require('../models/Inquiry');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const sampleProducts = [
  {
    name: 'Mixed Vegetables',
    description: 'Premium quality frozen mixed vegetables including carrots, peas, beans, and corn. Perfect for quick and healthy meals.',
    category: 'Frozen Vegetables',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400',
    weight: '500g',
    price: 120,
    available: true,
    featured: true,
    nutrition: {
      calories: '80 kcal',
      protein: '3g',
      carbs: '15g',
      fat: '0.5g'
    }
  },
  {
    name: 'Green Peas',
    description: 'Fresh frozen green peas, rich in protein and fiber. Ideal for various Indian dishes.',
    category: 'Frozen Vegetables',
    image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400',
    weight: '1kg',
    price: 150,
    available: true,
    featured: true,
    nutrition: {
      calories: '81 kcal',
      protein: '5g',
      carbs: '14g',
      fat: '0.4g'
    }
  },
  {
    name: 'Samosa',
    description: 'Crispy and delicious frozen samosas filled with spiced potatoes and peas. Ready to fry.',
    category: 'Frozen Snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400',
    weight: '400g (8 pieces)',
    price: 180,
    available: true,
    featured: true,
    nutrition: {
      calories: '262 kcal',
      protein: '4g',
      carbs: '32g',
      fat: '13g'
    }
  },
  {
    name: 'Spring Rolls',
    description: 'Vegetable spring rolls with a crispy outer layer. Perfect party snack.',
    category: 'Frozen Snacks',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400',
    weight: '300g (6 pieces)',
    price: 160,
    available: true,
    featured: false,
    nutrition: {
      calories: '220 kcal',
      protein: '5g',
      carbs: '28g',
      fat: '10g'
    }
  },
  {
    name: 'Aloo Paratha',
    description: 'Traditional Indian flatbread stuffed with spiced potato filling. Heat and serve.',
    category: 'Frozen Paratha',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400',
    weight: '400g (4 pieces)',
    price: 140,
    available: true,
    featured: true,
    nutrition: {
      calories: '300 kcal',
      protein: '7g',
      carbs: '45g',
      fat: '10g'
    }
  },
  {
    name: 'Paneer Paratha',
    description: 'Delicious parathas filled with cottage cheese and spices. Ready to cook.',
    category: 'Frozen Paratha',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400',
    weight: '400g (4 pieces)',
    price: 180,
    available: true,
    featured: false,
    nutrition: {
      calories: '320 kcal',
      protein: '12g',
      carbs: '42g',
      fat: '12g'
    }
  },
  {
    name: 'Palak Paneer',
    description: 'Ready-to-eat palak paneer made with fresh spinach and cottage cheese.',
    category: 'Frozen Ready-to-Eat',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400',
    weight: '300g',
    price: 200,
    available: true,
    featured: false,
    nutrition: {
      calories: '180 kcal',
      protein: '10g',
      carbs: '12g',
      fat: '11g'
    }
  },
  {
    name: 'Dal Makhani',
    description: 'Creamy and rich dal makhani, ready to heat and eat.',
    category: 'Frozen Ready-to-Eat',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    weight: '300g',
    price: 180,
    available: true,
    featured: false,
    nutrition: {
      calories: '210 kcal',
      protein: '9g',
      carbs: '25g',
      fat: '8g'
    }
  },
  {
    name: 'Gulab Jamun',
    description: 'Traditional Indian sweet dumplings in sugar syrup. Frozen for freshness.',
    category: 'Frozen Sweets',
    image: 'https://images.unsplash.com/photo-1589301773859-34e5d0b9b3e4?w=400',
    weight: '500g (10 pieces)',
    price: 220,
    available: true,
    featured: false,
    nutrition: {
      calories: '375 kcal',
      protein: '4g',
      carbs: '65g',
      fat: '12g'
    }
  },
  {
    name: 'Rasgulla',
    description: 'Soft and spongy rasgullas in light sugar syrup.',
    category: 'Frozen Sweets',
    image: 'https://images.unsplash.com/photo-1589301773859-34e5d0b9b3e4?w=400',
    weight: '500g (8 pieces)',
    price: 200,
    available: true,
    featured: false,
    nutrition: {
      calories: '186 kcal',
      protein: '4g',
      carbs: '40g',
      fat: '1g'
    }
  },
  {
    name: 'Sweet Corn',
    description: 'Premium quality frozen sweet corn kernels. Great for salads and soups.',
    category: 'Frozen Vegetables',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400',
    weight: '500g',
    price: 130,
    available: true,
    featured: false,
    nutrition: {
      calories: '86 kcal',
      protein: '3g',
      carbs: '19g',
      fat: '1g'
    }
  },
  {
    name: 'French Fries',
    description: 'Crispy golden french fries, perfect for snacking.',
    category: 'Frozen Snacks',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
    weight: '1kg',
    price: 200,
    available: true,
    featured: false,
    nutrition: {
      calories: '312 kcal',
      protein: '4g',
      carbs: '41g',
      fat: '15g'
    }
  }
];

const sampleAdmin = {
  name: 'Admin',
  email: 'admin@shreefrozenfood.com',
  password: 'admin123',
  role: 'admin'
};

const sampleInquiries = [
  {
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '+919876543210',
    message: 'I would like to know about bulk order pricing for mixed vegetables.',
    type: 'bulk-order',
    status: 'pending'
  },
  {
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+919876543211',
    message: 'Do you deliver to Bangalore? What are the delivery charges?',
    type: 'general',
    status: 'contacted'
  },
  {
    name: 'Amit Patel',
    email: 'amit@example.com',
    phone: '+919876543212',
    message: 'I need information about the nutritional content of your parathas.',
    type: 'product',
    status: 'resolved'
  }
];

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Inquiry.deleteMany();

    console.log('Existing data cleared');

    // Create admin user
    const admin = await User.create(sampleAdmin);
    console.log('Admin user created');

    // Create products
    await Product.insertMany(sampleProducts);
    console.log('Sample products created');

    // Create inquiries
    await Inquiry.insertMany(sampleInquiries);
    console.log('Sample inquiries created');

    console.log('\n=================================');
    console.log('Data seeded successfully!');
    console.log('=================================');
    console.log('\nAdmin Credentials:');
    console.log('Email: admin@shreefrozenfood.com');
    console.log('Password: admin123');
    console.log('=================================\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
