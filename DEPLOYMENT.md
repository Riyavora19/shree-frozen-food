# Deployment Guide - Shree Frozen Food

This guide covers deploying your MERN application to production.

## Prerequisites

- MongoDB Atlas account (free tier available)
- Hosting platform account (Vercel, Netlify, Heroku, etc.)
- Domain name (optional)

## Part 1: Database Setup (MongoDB Atlas)

### 1. Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a new cluster (M0 Free tier)

### 2. Configure Database
1. Create database user:
   - Database Access → Add New Database User
   - Username: `shreefrozen`
   - Password: Generate secure password
   - Database User Privileges: Read and write to any database

2. Whitelist IP addresses:
   - Network Access → Add IP Address
   - Allow Access from Anywhere: `0.0.0.0/0` (for development)
   - For production, add specific IPs

3. Get Connection String:
   - Clusters → Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://shreefrozen:password@cluster0.xxxxx.mongodb.net/shree-frozen-food`

## Part 2: Backend Deployment

### Option A: Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create shree-frozen-food-api
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="your_mongodb_atlas_connection_string"
   heroku config:set JWT_SECRET="your_super_secret_jwt_key"
   heroku config:set JWT_EXPIRE="7d"
   heroku config:set NODE_ENV="production"
   ```

5. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

6. **Seed Database**
   ```bash
   heroku run npm run seed
   ```

Your API will be available at: `https://shree-frozen-food-api.herokuapp.com`

### Option B: Deploy to Railway

1. Go to https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub repo
4. Select your backend folder
5. Add environment variables in Railway dashboard
6. Deploy automatically

### Option C: Deploy to DigitalOcean

1. Create a Droplet (Ubuntu)
2. SSH into server
3. Install Node.js and MongoDB
4. Clone your repository
5. Install dependencies
6. Use PM2 to run the server
7. Configure Nginx as reverse proxy

## Part 3: Frontend Deployment

### Option A: Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Update API URL**
   
   Edit `frontend/.env`:
   ```env
   REACT_APP_API_URL=https://your-backend-url.herokuapp.com/api
   ```

4. **Deploy**
   ```bash
   cd frontend
   vercel
   ```

5. **Set Environment Variables in Vercel Dashboard**
   - Go to Vercel dashboard
   - Select your project
   - Settings → Environment Variables
   - Add `REACT_APP_API_URL`

Your website will be available at: `https://shree-frozen-food.vercel.app`

### Option B: Deploy to Netlify

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Drag and drop the `build` folder
   - Or connect GitHub repository

3. **Set Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add `REACT_APP_API_URL`

### Option C: Deploy to AWS S3 + CloudFront

1. Build the project
2. Create S3 bucket
3. Enable static website hosting
4. Upload build files
5. Configure CloudFront for CDN
6. Update DNS settings

## Part 4: Domain Configuration

### 1. Purchase Domain
- Namecheap, GoDaddy, or Google Domains

### 2. Configure DNS
For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### 3. Add Custom Domain
- In Vercel/Netlify dashboard
- Add custom domain
- Wait for DNS propagation (24-48 hours)

## Part 5: SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

For custom deployment:
- Use Let's Encrypt (free)
- Or purchase SSL certificate

## Part 6: Post-Deployment Checklist

### Security
- [ ] Change all default passwords
- [ ] Use strong JWT_SECRET
- [ ] Enable HTTPS only
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable Helmet security headers

### Performance
- [ ] Enable compression
- [ ] Optimize images
- [ ] Enable caching
- [ ] Use CDN for static assets
- [ ] Minify CSS/JS

### Monitoring
- [ ] Set up error tracking (Sentry)
- [ ] Configure logging
- [ ] Set up uptime monitoring
- [ ] Enable analytics (Google Analytics)

### Backup
- [ ] Set up automated database backups
- [ ] Document recovery procedures
- [ ] Test backup restoration

## Part 7: Environment Variables Summary

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=super_secret_key_change_this
JWT_EXPIRE=7d
NODE_ENV=production
```

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-api-domain.com/api
```

## Part 8: Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Troubleshooting

### Issue: CORS Error in Production
**Solution**: Update CORS configuration in `backend/server.js`:
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com',
  credentials: true
}));
```

### Issue: Environment Variables Not Working
**Solution**: 
- Restart the application after setting variables
- Check variable names (case-sensitive)
- Verify in platform dashboard

### Issue: Database Connection Failed
**Solution**:
- Check MongoDB Atlas IP whitelist
- Verify connection string
- Ensure database user has correct permissions

## Monitoring & Maintenance

### Regular Tasks
- Monitor error logs
- Check database performance
- Update dependencies
- Review security alerts
- Backup database weekly

### Recommended Tools
- **Error Tracking**: Sentry
- **Uptime Monitoring**: UptimeRobot
- **Analytics**: Google Analytics
- **Performance**: Lighthouse, GTmetrix

## Cost Estimation

### Free Tier (Development)
- MongoDB Atlas: Free (M0)
- Vercel: Free
- Netlify: Free
- Total: $0/month

### Production (Small Business)
- MongoDB Atlas: $9/month (M10)
- Heroku: $7/month (Hobby)
- Domain: $12/year
- Total: ~$16/month

### Production (Growing Business)
- MongoDB Atlas: $57/month (M30)
- DigitalOcean: $12/month
- CloudFlare: Free
- Domain: $12/year
- Total: ~$69/month

---

## Support

For deployment issues:
1. Check platform documentation
2. Review error logs
3. Test locally first
4. Contact platform support

Good luck with your deployment! 🚀
