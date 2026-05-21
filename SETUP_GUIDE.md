# Shree Frozen Food - Complete Setup Guide

This guide will help you set up and run the Shree Frozen Food website on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB**
   - Option A: Install locally from https://www.mongodb.com/try/download/community
   - Option B: Use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
   - Verify installation: `mongod --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## Step-by-Step Setup

### Step 1: MongoDB Setup

#### Option A: Local MongoDB
1. Start MongoDB service:
   - Windows: MongoDB should start automatically, or run `net start MongoDB`
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

2. Your MongoDB URI will be: `mongodb://localhost:27017/shree-frozen-food`

#### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free tier available)
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/shree-frozen-food`)

### Step 2: Backend Setup

1. Open terminal/command prompt and navigate to backend folder:
```bash
cd backend
```

2. Install all dependencies:
```bash
npm install
```

3. Create `.env` file in the backend folder:
```bash
# On Windows
copy .env.example .env

# On Mac/Linux
cp .env.example .env
```

4. Edit the `.env` file with your settings:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shree-frozen-food
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

**Important**: Change `JWT_SECRET` to a random string for security!

5. Seed the database with sample data:
```bash
npm run seed
```

This will create:
- Admin account (email: admin@shreefrozenfood.com, password: admin123)
- 12 sample products
- 3 sample inquiries

6. Start the backend server:
```bash
npm run dev
```

You should see:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

Backend is now running at: http://localhost:5000

### Step 3: Frontend Setup

1. Open a NEW terminal/command prompt and navigate to frontend folder:
```bash
cd frontend
```

2. Install all dependencies:
```bash
npm install
```

3. Create `.env` file in the frontend folder:
```bash
# On Windows
copy .env.example .env

# On Mac/Linux
cp .env.example .env
```

4. The `.env` file should contain:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the frontend development server:
```bash
npm start
```

The browser should automatically open at: http://localhost:3000

## Accessing the Website

### Public Website
- Home: http://localhost:3000/
- About: http://localhost:3000/about
- Products: http://localhost:3000/products
- Contact: http://localhost:3000/contact

### Admin Panel
- Login: http://localhost:3000/admin/login
- Dashboard: http://localhost:3000/admin (after login)
- Inquiries: http://localhost:3000/admin/inquiries (after login)

**Admin Credentials:**
```
Email: admin@shreefrozenfood.com
Password: admin123
```

## Testing the Application

### Test Public Features:
1. Browse products on the home page
2. View product details
3. Submit an inquiry through the contact form
4. Check WhatsApp button functionality

### Test Admin Features:
1. Login to admin panel
2. View dashboard statistics
3. Check inquiries list
4. Update inquiry status
5. Delete an inquiry
6. Logout

## Common Issues & Solutions

### Issue 1: MongoDB Connection Error
**Error**: `MongooseServerSelectionError: connect ECONNREFUSED`

**Solution**:
- Make sure MongoDB is running
- Check if MONGODB_URI in .env is correct
- For local MongoDB, ensure the service is started

### Issue 2: Port Already in Use
**Error**: `Port 5000 is already in use`

**Solution**:
- Change PORT in backend/.env to another port (e.g., 5001)
- Update REACT_APP_API_URL in frontend/.env accordingly

### Issue 3: CORS Error
**Error**: `Access to XMLHttpRequest has been blocked by CORS policy`

**Solution**:
- Make sure backend is running
- Check if REACT_APP_API_URL in frontend/.env is correct
- Restart both frontend and backend servers

### Issue 4: Module Not Found
**Error**: `Cannot find module 'xyz'`

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue 5: React Scripts Error
**Error**: `react-scripts: command not found`

**Solution**:
```bash
npm install react-scripts --save
```

## Project Structure Overview

```
shree-frozen-food/
├── backend/              # Node.js + Express backend
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth & error handling
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   └── server.js        # Entry point
│
└── frontend/            # React frontend
    ├── public/          # Static files
    └── src/
        ├── components/  # Reusable components
        ├── layouts/     # Layout components
        ├── pages/       # Page components
        ├── services/    # API services
        └── utils/       # Helper functions
```

## Available Scripts

### Backend
```bash
npm start       # Start production server
npm run dev     # Start development server with nodemon
npm run seed    # Seed database with sample data
```

### Frontend
```bash
npm start       # Start development server
npm run build   # Build for production
npm test        # Run tests
```

## Next Steps

1. **Customize Content**:
   - Update company information in Footer.jsx
   - Change contact details in Contact.jsx
   - Update WhatsApp number in WhatsAppButton.jsx

2. **Add Products**:
   - Use the seed script or add products via MongoDB directly
   - Update product images with your own

3. **Styling**:
   - Modify colors in tailwind.config.js
   - Update styles in index.css

4. **Deployment**:
   - Backend: Deploy to Heroku, Railway, or DigitalOcean
   - Frontend: Deploy to Vercel, Netlify, or AWS
   - Database: Use MongoDB Atlas for production

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure both frontend and backend are running
4. Check MongoDB connection

## Security Notes

⚠️ **Important for Production**:
1. Change JWT_SECRET to a strong random string
2. Use environment variables for all sensitive data
3. Enable HTTPS
4. Set up proper CORS origins
5. Implement rate limiting
6. Regular security updates

---

Happy Coding! 🚀
