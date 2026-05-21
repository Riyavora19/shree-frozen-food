# 🪟 Windows Quick Start Guide

## 🎯 Easy Way - Use Batch Files (Double-Click)

I've created simple batch files for you. Just double-click them!

### **First Time Setup:**

1. **Seed Database** (Only once)
   - Double-click: `SEED_DATABASE.bat`
   - Wait for "Database seeded successfully!"

### **Every Time You Want to Run:**

2. **Start Backend**
   - Double-click: `START_BACKEND.bat`
   - Keep this window open
   - Wait for "MongoDB Connected"

3. **Start Frontend** (Open in NEW window)
   - Double-click: `START_FRONTEND.bat`
   - Browser will open automatically
   - Keep this window open too

### **If Port 5000 is Busy:**
   - Double-click: `kill-port-5000.bat`
   - Then start backend again

---

## 📋 Manual Way - Using Command Prompt

### **Step 1: Open Command Prompt**
- Press `Win + R`
- Type `cmd`
- Press Enter

### **Step 2: Navigate to Project**
```cmd
cd C:\Users\Admin\Desktop\ShreeFrozenFood\shree-frozen-food
```

### **Step 3: Seed Database (First Time Only)**
```cmd
cd backend
npm run seed
```

### **Step 4: Start Backend**
```cmd
cd backend
npm run dev
```
**Keep this window open!**

### **Step 5: Start Frontend (NEW Command Prompt)**
- Open another Command Prompt
- Navigate to project:
```cmd
cd C:\Users\Admin\Desktop\ShreeFrozenFood\shree-frozen-food
cd frontend
npm start
```
**Keep this window open too!**

---

## ❌ Common Issues on Windows

### Issue 1: Port 5000 Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution A - Use Batch File:**
- Double-click: `kill-port-5000.bat`

**Solution B - Manual:**
```cmd
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

### Issue 2: MongoDB Not Running

**Error:**
```
MongooseServerSelectionError: connect ECONNREFUSED
```

**Solution:**
```cmd
net start MongoDB
```

If MongoDB is not installed:
- Download from: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud)

### Issue 3: 'npm' is not recognized

**Solution:**
- Install Node.js from: https://nodejs.org/
- Restart Command Prompt after installation

### Issue 4: Permission Denied

**Solution:**
- Right-click Command Prompt
- Select "Run as Administrator"

---

## 🛑 How to Stop Servers

In each Command Prompt window:
- Press `Ctrl + C`
- Type `Y` if asked
- Press Enter

Or simply close the Command Prompt windows.

---

## 📍 Access URLs

Once both servers are running:

- **Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api

**Admin Credentials:**
```
Email: admin@shreefrozenfood.com
Password: admin123
```

---

## 🎯 Quick Checklist

Before running:
- [ ] Node.js installed
- [ ] MongoDB installed (or using Atlas)
- [ ] Dependencies installed (`npm install` in both folders)
- [ ] `.env` files created
- [ ] MongoDB service running

To run:
- [ ] Seed database (first time only)
- [ ] Start backend (keep window open)
- [ ] Start frontend (keep window open)
- [ ] Open browser to http://localhost:3000

---

## 💡 Pro Tips for Windows

1. **Create Desktop Shortcuts:**
   - Right-click on `.bat` files
   - Send to → Desktop (create shortcut)

2. **Pin to Taskbar:**
   - Right-click Command Prompt
   - Pin to taskbar for quick access

3. **Use Windows Terminal:**
   - Better than Command Prompt
   - Download from Microsoft Store
   - Can run multiple tabs

4. **Check Services:**
   - Press `Win + R`
   - Type `services.msc`
   - Find MongoDB service
   - Set to "Automatic" start

---

## 🔧 Useful Windows Commands

### Check Node Version
```cmd
node --version
```

### Check npm Version
```cmd
npm --version
```

### Check MongoDB Status
```cmd
sc query MongoDB
```

### Start MongoDB
```cmd
net start MongoDB
```

### Stop MongoDB
```cmd
net stop MongoDB
```

### Find Process on Port
```cmd
netstat -ano | findstr :5000
```

### Kill Process
```cmd
taskkill /PID <PID> /F
```

### Clear npm Cache
```cmd
npm cache clean --force
```

---

## 📂 Project Location

Your project is at:
```
C:\Users\Admin\Desktop\ShreeFrozenFood\shree-frozen-food\
```

---

## 🎉 You're Ready!

**Easiest Way:**
1. Double-click `SEED_DATABASE.bat` (first time only)
2. Double-click `START_BACKEND.bat`
3. Double-click `START_FRONTEND.bat`
4. Visit http://localhost:3000

**That's it!** 🚀

---

## 📞 Need Help?

- **Port Issues**: Use `kill-port-5000.bat`
- **MongoDB Issues**: Run `net start MongoDB`
- **Other Issues**: Check `TROUBLESHOOTING.md`

---

**Happy Coding on Windows! 🪟🚀**
