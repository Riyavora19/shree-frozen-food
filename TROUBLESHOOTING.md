# Troubleshooting Guide - Shree Frozen Food

Common issues and their solutions.

---

## Backend Issues

### 1. MongoDB Connection Error

**Error Message:**
```
MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

**Causes & Solutions:**

**A. MongoDB Not Running**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**B. Wrong Connection String**
- Check `MONGODB_URI` in `.env`
- Should be: `mongodb://localhost:27017/shree-frozen-food`
- For Atlas: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

**C. MongoDB Not Installed**
- Download from: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud)

---

### 2. Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**

**Option A: Kill the Process**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**Option B: Change Port**
Edit `backend/.env`:
```env
PORT=5001
```

Then update `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5001/api
```

---

### 3. JWT Secret Error

**Error Message:**
```
Error: secretOrPrivateKey must have a value
```

**Solution:**
Add `JWT_SECRET` to `backend/.env`:
```env
JWT_SECRET=your_super_secret_key_here
```

---

### 4. Module Not Found

**Error Message:**
```
Error: Cannot find module 'express'
```

**Solution:**
```bash
cd backend
rm -rf node_modules
npm install
```

---

### 5. Bcrypt Installation Error

**Error Message:**
```
Error: node-pre-gyp install --fallback-to-build
```

**Solution:**
```bash
# Windows
npm install --global windows-build-tools
npm install bcryptjs

# Mac
xcode-select --install
npm install

# Linux
sudo apt-get install build-essential
npm install
```

---

## Frontend Issues

### 1. React Scripts Not Found

**Error Message:**
```
'react-scripts' is not recognized as an internal or external command
```

**Solution:**
```bash
cd frontend
npm install react-scripts --save
```

---

### 2. Tailwind CSS Not Working

**Symptoms:**
- No styling applied
- Classes not working

**Solution:**

**A. Check tailwind.config.js**
```javascript
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
```

**B. Check index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**C. Reinstall**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

---

### 3. CORS Error

**Error Message:**
```
Access to XMLHttpRequest has been blocked by CORS policy
```

**Solution:**

**A. Check Backend is Running**
```bash
# Should see: Server running on port 5000
```

**B. Check API URL**
Frontend `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

**C. Update CORS in Backend**
`backend/server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

### 4. Environment Variables Not Working

**Symptoms:**
- API calls fail
- undefined values

**Solution:**

**A. Restart Development Server**
```bash
# Stop server (Ctrl+C)
npm start
```

**B. Check Variable Names**
- Must start with `REACT_APP_`
- Example: `REACT_APP_API_URL`

**C. Check .env Location**
- Must be in `frontend/` folder
- Not in `frontend/src/`

---

### 5. Build Errors

**Error Message:**
```
Failed to compile
```

**Solution:**

**A. Clear Cache**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

**B. Check for Syntax Errors**
- Look at error message
- Check the file mentioned
- Fix syntax issues

---

## API Issues

### 1. 401 Unauthorized

**Error Message:**
```
Not authorized, no token
```

**Solution:**

**A. Login Again**
- Token might be expired
- Login to admin panel again

**B. Check Token Storage**
```javascript
// In browser console
localStorage.getItem('token')
```

**C. Check Token Expiry**
Backend `.env`:
```env
JWT_EXPIRE=7d
```

---

### 2. 404 Not Found

**Error Message:**
```
Cannot GET /api/products
```

**Solution:**

**A. Check Backend is Running**
```bash
# Should see: Server running on port 5000
```

**B. Check API URL**
```javascript
// frontend/src/services/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

**C. Check Route Definition**
```javascript
// backend/server.js
app.use('/api/products', require('./routes/productRoutes'));
```

---

### 3. 500 Internal Server Error

**Error Message:**
```
Internal Server Error
```

**Solution:**

**A. Check Backend Console**
- Look for error messages
- Check stack trace

**B. Check Database Connection**
```bash
# Should see: MongoDB Connected
```

**C. Check Model Validation**
- Ensure required fields are provided
- Check data types

---

## Database Issues

### 1. Seed Script Fails

**Error Message:**
```
Error seeding data
```

**Solution:**

**A. Check MongoDB is Running**
```bash
# Check connection
mongosh
```

**B. Clear Database**
```bash
# In MongoDB shell
use shree-frozen-food
db.dropDatabase()
```

**C. Run Seed Again**
```bash
cd backend
npm run seed
```

---

### 2. Duplicate Key Error

**Error Message:**
```
E11000 duplicate key error
```

**Solution:**

**A. Email Already Exists**
- Use different email
- Or delete existing user

**B. Clear Collection**
```javascript
// In MongoDB shell
db.users.deleteMany({})
```

---

### 3. Validation Error

**Error Message:**
```
Validation failed: name: Path `name` is required
```

**Solution:**
- Ensure all required fields are provided
- Check model schema in `backend/models/`

---

## Installation Issues

### 1. npm install Fails

**Error Message:**
```
npm ERR! code EACCES
```

**Solution:**

**Windows:**
```bash
# Run as Administrator
```

**Mac/Linux:**
```bash
sudo npm install
# Or fix permissions
sudo chown -R $USER:$GROUP ~/.npm
```

---

### 2. Node Version Error

**Error Message:**
```
error: The engine "node" is incompatible
```

**Solution:**
```bash
# Check Node version
node --version

# Should be v14 or higher
# Update Node.js from https://nodejs.org/
```

---

## Performance Issues

### 1. Slow Loading

**Solution:**

**A. Check Network Tab**
- Open browser DevTools
- Check which requests are slow

**B. Optimize Images**
- Use compressed images
- Use appropriate image sizes

**C. Enable Caching**
```javascript
// In backend
app.use(express.static('public', {
  maxAge: '1d'
}));
```

---

### 2. High Memory Usage

**Solution:**

**A. Restart Servers**
```bash
# Stop both servers
# Start again
```

**B. Clear Node Cache**
```bash
npm cache clean --force
```

---

## Browser Issues

### 1. Blank Page

**Solution:**

**A. Check Console**
- Open browser DevTools (F12)
- Look for errors in Console tab

**B. Check Network**
- Check Network tab
- Look for failed requests

**C. Clear Browser Cache**
```
Ctrl+Shift+Delete (Windows)
Cmd+Shift+Delete (Mac)
```

---

### 2. Styles Not Loading

**Solution:**

**A. Hard Refresh**
```
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

**B. Clear Cache**
- Clear browser cache
- Restart development server

---

## Deployment Issues

### 1. Build Fails

**Solution:**

**A. Check Environment Variables**
- Ensure all variables are set
- Check variable names

**B. Test Build Locally**
```bash
cd frontend
npm run build
```

**C. Check Build Logs**
- Read error messages
- Fix issues mentioned

---

### 2. API Not Connecting

**Solution:**

**A. Check API URL**
- Should be production URL
- Not localhost

**B. Check CORS**
```javascript
// backend/server.js
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

---

## General Tips

### Debug Mode

**Backend:**
```javascript
// Add console.logs
console.log('Request body:', req.body);
console.log('User:', req.user);
```

**Frontend:**
```javascript
// Add console.logs
console.log('API Response:', response.data);
console.log('Form Data:', formData);
```

### Check Logs

**Backend:**
```bash
# Check terminal where backend is running
# Look for error messages
```

**Frontend:**
```bash
# Check browser console (F12)
# Look for errors and warnings
```

### Test API with Postman

1. Download Postman
2. Test endpoints directly
3. Check responses
4. Verify data

---

## Still Having Issues?

### 1. Check Documentation
- README.md
- SETUP_GUIDE.md
- Backend/README.md

### 2. Search Error Message
- Google the exact error
- Check Stack Overflow
- Check GitHub issues

### 3. Start Fresh
```bash
# Delete everything
rm -rf node_modules
rm package-lock.json

# Reinstall
npm install

# Restart servers
```

### 4. Check Versions
```bash
node --version    # Should be v14+
npm --version     # Should be v6+
mongod --version  # Should be v4+
```

---

## Quick Checklist

Before asking for help, verify:

- [ ] MongoDB is running
- [ ] Backend server is running (port 5000)
- [ ] Frontend server is running (port 3000)
- [ ] .env files are created
- [ ] Environment variables are correct
- [ ] Dependencies are installed
- [ ] No syntax errors in code
- [ ] Browser console shows no errors
- [ ] API endpoints are correct

---

## Contact Support

If you still need help:
1. Describe the issue clearly
2. Include error messages
3. Mention what you've tried
4. Share relevant code snippets

---

Happy Debugging! 🐛🔧
