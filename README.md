# Shree Frozen Food - MERN Stack Website

A modern, professional business website for Shree Frozen Food built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

### Public Website
- **Home Page**: Hero banner, featured products, why choose us section
- **About Page**: Company information, mission & vision, quality standards
- **Products Page**: Product listing with search and category filters
- **Product Detail Page**: Detailed product information with nutrition facts
- **Contact Page**: Inquiry form with contact information

### Admin Panel
- **Dashboard**: Overview of inquiries with statistics
- **Inquiry Management**: View, update status, and delete inquiries
- **Secure Authentication**: JWT-based admin login

### Technical Features
- Responsive design for all devices
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- WhatsApp floating button
- Toast notifications
- Protected admin routes
- RESTful API architecture
- MongoDB database integration

## Tech Stack

### Frontend
- React.js 18
- React Router DOM v6
- Tailwind CSS
- Framer Motion (animations)
- Axios (API calls)
- React Toastify (notifications)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt.js (password hashing)
- Express Validator
- Helmet (security)
- CORS
- Rate Limiting

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shree-frozen-food
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm start
```

Frontend will run on http://localhost:3000

## Creating Admin Account

To create an admin account, you can use the register endpoint:

**Method 1: Using API directly**
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Admin",
  "email": "admin@shreefrozenfood.com",
  "password": "admin123"
}
```

**Method 2: Using MongoDB directly**
You can also create an admin user directly in MongoDB.

## Demo Credentials

```
Email: admin@shreefrozenfood.com
Password: admin123
```

## Project Structure

```
shree-frozen-food/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── inquiryController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Inquiry.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── inquiryRoutes.js
│   │   └── productRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── uploads/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Footer.jsx
    │   │   ├── Loader.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   └── WhatsAppButton.jsx
    │   ├── hooks/
    │   ├── layouts/
    │   │   ├── AdminLayout.jsx
    │   │   └── MainLayout.jsx
    │   ├── pages/
    │   │   ├── admin/
    │   │   │   ├── AdminLogin.jsx
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── InquiriesManagement.jsx
    │   │   └── public/
    │   │       ├── About.jsx
    │   │       ├── Contact.jsx
    │   │       ├── Home.jsx
    │   │       ├── ProductDetail.jsx
    │   │       └── Products.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── utils/
    │   │   └── authUtils.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── index.js
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── postcss.config.js
    └── tailwind.config.js
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin user
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `GET /api/products/categories/list` - Get categories

### Inquiries
- `POST /api/inquiries` - Create inquiry (Public)
- `GET /api/inquiries` - Get all inquiries (Admin)
- `GET /api/inquiries/:id` - Get single inquiry (Admin)
- `PUT /api/inquiries/:id` - Update inquiry status (Admin)
- `DELETE /api/inquiries/:id` - Delete inquiry (Admin)
- `GET /api/inquiries/stats/dashboard` - Get inquiry stats (Admin)

## Color Scheme

- **Primary Color**: Dark Blue (#1e3a8a)
- **Secondary Color**: Orange (#f97316)
- **Background**: White / Light Gray

## Features to Add (Future Enhancements)

- Product image upload functionality
- Email notifications for inquiries
- Newsletter subscription
- Blog section
- Multi-language support
- Advanced analytics
- Export inquiries to CSV
- Product inventory management
- Order management system

## Security Features

- JWT authentication
- Password hashing with bcrypt
- Rate limiting
- Helmet security headers
- CORS configuration
- Input validation
- Protected routes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to Shree Frozen Food.

## Contact

For any queries or support:
- Email: info@shreefrozenfood.com
- Phone: +91 98765 43210

---

Built with ❤️ using MERN Stack
