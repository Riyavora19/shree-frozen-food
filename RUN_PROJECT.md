# 🚀 How to Run Shree Frozen Food Website

## ✅ Prerequisites Check

Before running, make sure:
1. ✅ Node.js is installed (`node --version`)
2. ✅ MongoDB is installed and running
3. ✅ Dependencies are installed

---

## 📋 Step-by-Step Instructions

### Step 1: Start MongoDB

**Windows:**
```bash
# Check if MongoDB is running
sc query MongoDB

# If not running, start it
net start MongoDB
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

**Alternative: Use MongoDB Atlas (Cloud)**
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get connection string
- Update `backend/.env` with your connection string

---

### Step 2: Seed the Database (First Time Only)

Open terminal in project root:

```bash
cd backend
npm run seed
```

You should see:
```
MongoDB Connected
Admin user created
Sample products created
Sample inquiries created

Admin Credentials:
Email: admin@shreefrozenfood.com
Password: admin123
```

---

### Step 3: Start Backend Server

**Keep the same terminal open or open a new one:**

```bash
cd backend
npm run dev
```

You should see:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

✅ Backend is now running at: http://localhost:5000

**Keep this terminal open!**

---

### Step 4: Start Frontend Server

**Open a NEW terminal** (keep backend running):

```bash
cd frontend
npm start
```

Browser should automatically open at: http://localhost:3000

✅ Frontend is now running!

**Keep this terminal open too!**

---

## 🎉 You're Done!

You should now have:
- ✅ Backend running on http://localhost:5000
- ✅ Frontend running on http://localhost:3000
- ✅ MongoDB connected
- ✅ Sample data loaded

---

## 🔍 Test the Website

### Public Pages:
1. **Home**: http://localhost:3000/
2. **About**: http://localhost:3000/about
3. **Products**: http://localhost:3000/products
4. **Contact**: http://localhost:3000/contact

### Admin Panel:
1. **Login**: http://localhost:3000/admin/login
   - Email: `admin@shreefrozenfood.com`
   - Password: `admin123`
2. **Dashboard**: http://localhost:3000/admin
3. **Inquiries**: http://localhost:3000/admin/inquiries

---

## ❌ Troubleshooting

### Problem: "MongoDB connection error"

**Solution:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Problem: "Port 5000 already in use"

**Solution:**
```bash
# Windows - Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Problem: "npm run dev not found"

**Solution:**
```bash
cd backend
npm install
```

### Problem: "Module not found"

**Solution:**
```bash
# Backend
cd backend
rm -rf node_modules
npm install

# Frontend
cd frontend
rm -rf node_modules
npm install
```

---

## 🛑 How to Stop

Press `Ctrl + C` in both terminals (backend and frontend)

---

## 📝 Quick Commands Reference

```bash
# Start MongoDB (Windows)
net start MongoDB

# Seed database (first time only)
cd backend && npm run seed

# Start backend
cd backend && npm run dev

# Start frontend (new terminal)
cd frontend && npm start

# Stop servers
Ctrl + C (in each terminal)
```

---

## 🎯 What to Do Next

1. ✅ Browse the website
2. ✅ Login to admin panel
3. ✅ Submit a test inquiry
4. ✅ Check admin dashboard
5. ✅ Customize the content
6. ✅ Add your own products

---

## 📞 Need More Help?

- **Setup Issues**: Read `TROUBLESHOOTING.md`
- **Commands**: Read `COMMANDS.md`
- **Features**: Read `FEATURES.md`
- **Deployment**: Read `DEPLOYMENT.md`

---

**Happy Coding! 🚀**
