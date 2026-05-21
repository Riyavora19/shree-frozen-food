# 🚀 Vercel Deployment Guide - Shree Frozen Food

## ✅ Issues Fixed

1. **Empty Hash Links**: Removed all `href="#"` from Footer social media links
2. **Vercel Configuration**: Added `vercel.json` for proper routing
3. **Environment Variables**: Created `.env.example` for reference

## 📋 Prerequisites

1. GitHub account with your code pushed
2. Vercel account (free): https://vercel.com
3. MongoDB Atlas account (free): https://www.mongodb.com/cloud/atlas

## 🎯 Step-by-Step Deployment

### Part 1: Setup MongoDB Atlas (Backend Database)

1. **Create MongoDB Atlas Account**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose "Free" tier (M0)
   - Select region closest to you
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `shreefrozenuser`
   - Password: Generate a strong password (save it!)
   - User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Example: `mongodb+srv://shreefrozenuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/shree-frozen-food?retryWrites=true&w=majority`

### Part 2: Deploy Backend to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Repository**
   - Select your GitHub repository: `shree-frozen-food`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:

   ```
   MONGODB_URI=mongodb+srv://shreefrozenuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/shree-frozen-food?retryWrites=true&w=majority
   
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
   
   JWT_EXPIRE=7d
   
   NODE_ENV=production
   
   PORT=5000
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://shree-frozen-food-backend.vercel.app`)

### Part 3: Deploy Frontend to Vercel

1. **Create New Project**
   - Click "Add New" → "Project"
   - Select same repository: `shree-frozen-food`

2. **Configure Project**
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

3. **Add Environment Variables**
   Click "Environment Variables" and add:

   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app/api
   ```
   
   Replace `your-backend-url` with your actual backend URL from Part 2

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your website is now live! 🎉

### Part 4: Seed Database (One-time)

After backend is deployed, you need to seed the database:

**Option 1: Use Vercel CLI**
```bash
npm install -g vercel
vercel login
cd backend
vercel env pull
node utils/seedCategories.js
node utils/seedData.js
```

**Option 2: Create API Endpoint**
Add a seed endpoint in your backend (temporary, remove after use):

```javascript
// backend/server.js
app.get('/api/seed', async (req, res) => {
  // Run seed scripts
  res.json({ message: 'Database seeded' });
});
```

Then visit: `https://your-backend-url.vercel.app/api/seed`

**Option 3: Use MongoDB Compass**
- Download MongoDB Compass
- Connect using your MongoDB Atlas connection string
- Manually import data

## 🔧 Post-Deployment Configuration

### Update CORS in Backend

Make sure your backend allows requests from your frontend domain:

```javascript
// backend/server.js
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app'
  ],
  credentials: true
}));
```

### Create Admin Account

After seeding, login with:
- Email: `admin@shreefrozenfood.com`
- Password: `admin123`

**IMPORTANT**: Change this password immediately in production!

## 🐛 Troubleshooting

### Issue: "Empty href attribute"
**Fixed!** All `href="#"` have been replaced with actual URLs.

### Issue: "Cannot connect to backend"
- Check `REACT_APP_API_URL` in frontend environment variables
- Make sure backend URL is correct
- Check CORS settings in backend

### Issue: "MongoDB connection failed"
- Verify MongoDB Atlas connection string
- Check if IP whitelist includes 0.0.0.0/0
- Verify database user credentials

### Issue: "Build failed"
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Make sure root directory is set correctly

### Issue: "Routes not working (404)"
- `vercel.json` is already configured for React Router
- Make sure it's in the frontend folder

## 📱 Custom Domain (Optional)

1. Go to your Vercel project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic)

## 🔐 Security Checklist

- ✅ Change default admin password
- ✅ Use strong JWT_SECRET
- ✅ Enable MongoDB Atlas IP whitelist (production)
- ✅ Remove seed endpoints after use
- ✅ Don't commit .env files
- ✅ Use environment variables for all secrets

## 📊 Monitor Your Deployment

- **Vercel Dashboard**: View logs, analytics, deployments
- **MongoDB Atlas**: Monitor database usage, performance
- **Vercel Analytics**: Track website visitors (optional)

## 🔄 Future Updates

To update your deployed website:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Vercel automatically redeploys! 🎉

## 📞 Your Deployed URLs

After deployment, you'll have:
- **Frontend**: `https://shree-frozen-food.vercel.app`
- **Backend**: `https://shree-frozen-food-backend.vercel.app`
- **Admin Panel**: `https://shree-frozen-food.vercel.app/admin/login`

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] IP whitelist configured
- [ ] Backend deployed to Vercel
- [ ] Backend environment variables set
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variables set
- [ ] Database seeded
- [ ] Admin login tested
- [ ] All pages working
- [ ] Contact form working
- [ ] WhatsApp button working
- [ ] Mobile responsive tested

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- React Deployment: https://create-react-app.dev/docs/deployment

**Your website is ready to go live! 🚀**
