# 🔧 Fix: Frontend Running on Wrong Port

## Problem
- Frontend is running on port 5000 (should be 3000)
- Backend is not running at all

## Why This Happens
React automatically uses the next available port if 3000 is busy. If port 3000 was occupied, React used port 5000 instead.

---

## ✅ SOLUTION

### **Use the New Clean Start Script:**

**Double-click**: `CLEAN_START.bat`

This will:
1. ✅ Kill ALL Node processes
2. ✅ Clear ports 3000 and 5000
3. ✅ Start MongoDB
4. ✅ Start Backend on port 5000 (correct)
5. ✅ Start Frontend on port 3000 (correct)
6. ✅ Open browser automatically

---

## 📋 What Should Happen

### **Backend Window:**
```
Starting Backend...
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### **Frontend Window:**
```
Starting Frontend on port 3000...
Compiled successfully!

You can now view shree-frozen-food-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

### **Ports:**
- ✅ Backend: http://localhost:5000 (API)
- ✅ Frontend: http://localhost:3000 (Website)

---

## 🔍 Verify Correct Ports

After starting, check ports:

**Open Command Prompt and run:**
```cmd
netstat -ano | findstr "3000 5000"
```

**You should see:**
```
TCP    0.0.0.0:3000    ...    LISTENING    <PID>
TCP    0.0.0.0:5000    ...    LISTENING    <PID>
```

- Port 3000 = Frontend ✅
- Port 5000 = Backend ✅

---

## ❌ If Still Wrong

### Manual Fix:

**1. Kill Everything:**
```cmd
taskkill /F /IM node.exe
```

**2. Start Backend First:**
```cmd
cd backend
npm run dev
```
Wait for "Server running on port 5000"

**3. Start Frontend (NEW window):**
```cmd
cd frontend
set PORT=3000
npm start
```
Wait for "Compiled successfully"

---

## 🎯 Files Updated

I've updated these files to force correct ports:

1. ✅ `frontend\.env` - Added `PORT=3000`
2. ✅ `frontend\.env.local` - Created with `PORT=3000`
3. ✅ `START_FRONTEND.bat` - Sets `PORT=3000`
4. ✅ `CLEAN_START.bat` - New script (recommended)

---

## 💡 Why Backend Wasn't Running

Possible reasons:
1. MongoDB not running
2. Port 5000 was occupied
3. Dependencies not installed
4. .env file missing

The `CLEAN_START.bat` script checks all of these!

---

## 🚀 Quick Action

**Do this now:**

1. Close ALL terminal/command windows
2. **Double-click**: `CLEAN_START.bat`
3. Wait 15 seconds
4. Check both windows for success messages
5. Browser opens to http://localhost:3000
6. Go to http://localhost:3000/admin/login

---

## ✅ Success Checklist

You'll know it's working when:
- [ ] Backend window shows "port 5000"
- [ ] Frontend window shows "port 3000"
- [ ] Browser opens to localhost:3000
- [ ] Home page loads correctly
- [ ] Admin login page works
- [ ] No errors in console (F12)

---

## 📞 Still Having Issues?

### Check Backend Window:
- Does it say "port 5000"?
- Any red errors?
- MongoDB connected?

### Check Frontend Window:
- Does it say "port 3000"?
- Any compilation errors?
- Says "Compiled successfully"?

### Check Browser:
- Press F12 → Console tab
- Any red errors?
- What's the URL?

---

## 🎯 Correct URLs

Once both servers are running correctly:

✅ **Frontend (Website):**
- Home: http://localhost:3000/
- Admin: http://localhost:3000/admin/login
- Products: http://localhost:3000/products

✅ **Backend (API):**
- Health: http://localhost:5000/api/health
- Products: http://localhost:5000/api/products

❌ **Wrong URLs:**
- http://localhost:5000/ (backend, not frontend)
- http://localhost:5000/admin/login (wrong port)

---

**Use `CLEAN_START.bat` for the best experience!** 🚀
