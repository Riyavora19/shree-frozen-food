# Quick Start Guide - Shree Frozen Food

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies

Open terminal in project root and run:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Setup Environment Variables

**Backend (.env file in backend folder):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shree-frozen-food
JWT_SECRET=my_super_secret_key_12345
JWT_EXPIRE=7d
NODE_ENV=development
```

**Frontend (.env file in frontend folder):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Start MongoDB

Make sure MongoDB is running on your system.

### 4. Seed Database

```bash
cd backend
npm run seed
```

### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### 6. Access the Application

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login

**Admin Login:**
- Email: `admin@shreefrozenfood.com`
- Password: `admin123`

---

## 📱 Features to Test

### Public Website:
✅ Browse products  
✅ View product details  
✅ Submit inquiry form  
✅ WhatsApp button  

### Admin Panel:
✅ Login/Logout  
✅ View dashboard  
✅ Manage inquiries  
✅ Update inquiry status  

---

## 🛠️ Troubleshooting

**MongoDB not connecting?**
- Ensure MongoDB service is running
- Check MONGODB_URI in .env

**Port already in use?**
- Change PORT in backend/.env
- Update REACT_APP_API_URL in frontend/.env

**Dependencies error?**
```bash
rm -rf node_modules
npm install
```

---

## 📞 Need Help?

Check the detailed SETUP_GUIDE.md for complete instructions.

Happy Coding! 🎉
