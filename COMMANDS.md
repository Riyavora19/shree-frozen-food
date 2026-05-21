# Quick Commands Reference

Copy and paste these commands to set up and run the project.

---

## Initial Setup

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

---

## Environment Setup

### Backend .env File
Create `backend/.env` with:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shree-frozen-food
JWT_SECRET=my_super_secret_key_12345_change_this
JWT_EXPIRE=7d
NODE_ENV=development
```

### Frontend .env File
Create `frontend/.env` with:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Database Setup

### Seed Database
```bash
cd backend
npm run seed
```

---

## Running the Application

### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```

### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```

---

## Access URLs

- **Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api

---

## Admin Credentials

```
Email: admin@shreefrozenfood.com
Password: admin123
```

---

## Useful Commands

### Backend

```bash
# Start development server
npm run dev

# Start production server
npm start

# Seed database
npm run seed
```

### Frontend

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## Troubleshooting Commands

### Clear and Reinstall Dependencies

**Backend:**
```bash
cd backend
rm -rf node_modules
rm package-lock.json
npm install
```

**Frontend:**
```bash
cd frontend
rm -rf node_modules
rm package-lock.json
npm install
```

### Kill Port Process

**Windows:**
```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### MongoDB Commands

**Start MongoDB:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Stop MongoDB:**
```bash
# Windows
net stop MongoDB

# Mac
brew services stop mongodb-community

# Linux
sudo systemctl stop mongod
```

**Check MongoDB Status:**
```bash
# Windows
sc query MongoDB

# Mac
brew services list

# Linux
sudo systemctl status mongod
```

---

## Git Commands (Optional)

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Shree Frozen Food website"
```

### Create .gitignore
Already created in project root and subdirectories.

### Push to GitHub
```bash
git remote add origin https://github.com/yourusername/shree-frozen-food.git
git branch -M main
git push -u origin main
```

---

## Production Build

### Build Frontend
```bash
cd frontend
npm run build
```

### Test Production Build Locally
```bash
# Install serve globally
npm install -g serve

# Serve build folder
cd frontend
serve -s build
```

---

## Database Management

### MongoDB Shell Commands

```bash
# Connect to MongoDB
mongosh

# Use database
use shree-frozen-food

# Show collections
show collections

# View all products
db.products.find()

# View all inquiries
db.inquiries.find()

# View all users
db.users.find()

# Count documents
db.products.countDocuments()
db.inquiries.countDocuments()

# Delete all products
db.products.deleteMany({})

# Delete all inquiries
db.inquiries.deleteMany({})

# Drop database
db.dropDatabase()

# Exit
exit
```

---

## Testing API with cURL

### Test Health Check
```bash
curl http://localhost:5000/api/health
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@shreefrozenfood.com","password":"admin123"}'
```

### Test Get Products
```bash
curl http://localhost:5000/api/products
```

### Test Create Inquiry
```bash
curl -X POST http://localhost:5000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "phone":"1234567890",
    "message":"Test inquiry"
  }'
```

---

## Package Updates

### Check for Updates
```bash
npm outdated
```

### Update All Packages
```bash
npm update
```

### Update Specific Package
```bash
npm update package-name
```

---

## Development Tools

### Install Nodemon Globally (Optional)
```bash
npm install -g nodemon
```

### Install MongoDB Compass (GUI)
Download from: https://www.mongodb.com/products/compass

### Install Postman (API Testing)
Download from: https://www.postman.com/downloads/

---

## Quick Reset

### Complete Reset (Start Fresh)
```bash
# Stop all servers (Ctrl+C in terminals)

# Backend
cd backend
rm -rf node_modules
rm package-lock.json
npm install
npm run seed

# Frontend
cd frontend
rm -rf node_modules
rm package-lock.json
npm install

# Start servers again
```

---

## Environment Check

### Check Versions
```bash
node --version    # Should be v14+
npm --version     # Should be v6+
mongod --version  # Should be v4+
```

### Check Running Processes
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :5000
lsof -i :3000
```

---

## Logs and Debugging

### View Backend Logs
Check the terminal where backend is running.

### View Frontend Logs
Check the terminal where frontend is running.

### View Browser Console
Press F12 in browser → Console tab

### Enable Verbose Logging
```bash
# Backend
DEBUG=* npm run dev

# Frontend
REACT_APP_DEBUG=true npm start
```

---

## Backup Commands

### Backup MongoDB Database
```bash
mongodump --db shree-frozen-food --out ./backup
```

### Restore MongoDB Database
```bash
mongorestore --db shree-frozen-food ./backup/shree-frozen-food
```

---

## Performance Testing

### Test API Response Time
```bash
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:5000/api/products
```

Create `curl-format.txt`:
```
time_total: %{time_total}s
```

---

## One-Line Setup (After Prerequisites)

```bash
cd backend && npm install && npm run seed && npm run dev & cd ../frontend && npm install && npm start
```

---

## Common Workflows

### Daily Development
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm start
```

### After Pulling Changes
```bash
cd backend && npm install
cd frontend && npm install
```

### Before Committing
```bash
# Test everything works
cd backend && npm start
cd frontend && npm run build
```

---

## Help Commands

### npm Help
```bash
npm help
npm help install
npm help run-script
```

### Node Help
```bash
node --help
```

### MongoDB Help
```bash
mongosh --help
```

---

**Pro Tip**: Save these commands in a text file for quick reference!
