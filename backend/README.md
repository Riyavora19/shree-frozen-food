# Shree Frozen Food - Backend API

RESTful API built with Node.js, Express, and MongoDB.

## API Endpoints

### Authentication
```
POST   /api/auth/register    Register admin user
POST   /api/auth/login       Admin login
GET    /api/auth/me          Get current user (Protected)
```

### Products
```
GET    /api/products                    Get all products
GET    /api/products/:id                Get single product
POST   /api/products                    Create product (Admin)
PUT    /api/products/:id                Update product (Admin)
DELETE /api/products/:id                Delete product (Admin)
GET    /api/products/categories/list    Get categories
```

### Inquiries
```
POST   /api/inquiries                   Create inquiry (Public)
GET    /api/inquiries                   Get all inquiries (Admin)
GET    /api/inquiries/:id               Get single inquiry (Admin)
PUT    /api/inquiries/:id               Update inquiry status (Admin)
DELETE /api/inquiries/:id               Delete inquiry (Admin)
GET    /api/inquiries/stats/dashboard   Get inquiry stats (Admin)
```

## Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shree-frozen-food
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

## Installation

```bash
npm install
```

## Running

```bash
# Development
npm run dev

# Production
npm start

# Seed database
npm run seed
```

## Database Models

### User
- name
- email
- password (hashed)
- role (admin/user)

### Product
- name
- description
- category
- image
- weight
- price
- available
- nutrition
- featured

### Inquiry
- name
- email
- phone
- message
- status (pending/contacted/resolved)
- type (general/bulk-order/product)

## Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Rate Limiting
- Helmet Security Headers
- CORS Configuration
- Input Validation
