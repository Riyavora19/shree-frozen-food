# Category Management Guide

## Overview
The Category Management feature allows you to manage product categories from the admin panel. Categories are used to organize products and make them easier to browse.

## Features
- ✅ Add new categories
- ✅ Edit existing categories
- ✅ Delete categories
- ✅ Set category images
- ✅ Activate/deactivate categories
- ✅ Categories automatically appear in product dropdown

## How to Use

### 1. Access Category Management
1. Login to admin panel: http://localhost:3000/admin/login
2. Click on **"Categories"** in the sidebar menu

### 2. Add a New Category
1. Click the **"Add Category"** button
2. Fill in the form:
   - **Category Name** (required): e.g., "Frozen Vegetables"
   - **Description** (optional): Brief description of the category
   - **Image URL** (optional): Link to category image
   - **Active**: Check to make category visible
3. Click **"Add Category"**

### 3. Edit a Category
1. Find the category you want to edit
2. Click the **"Edit"** button
3. Update the information
4. Click **"Update Category"**

### 4. Delete a Category
1. Find the category you want to delete
2. Click the **"Delete"** button
3. Confirm the deletion
4. **Note**: Make sure no products are using this category before deleting

### 5. Deactivate a Category
1. Edit the category
2. Uncheck the **"Active"** checkbox
3. Save changes
4. Inactive categories won't appear in product dropdown

## Initial Categories
The system comes with 5 default categories:
1. Frozen Vegetables
2. Frozen Snacks
3. Frozen Paratha
4. Frozen Ready-to-Eat
5. Frozen Sweets

## Seeding Categories
If you need to reset categories to default:

**Windows:**
```bash
SEED_CATEGORIES.bat
```

**Manual:**
```bash
cd backend
node utils/seedCategories.js
```

## Integration with Products

### How It Works
1. Categories you create appear automatically in the **Products Management** page
2. When adding/editing a product, select a category from the dropdown
3. Only **active** categories appear in the dropdown
4. Products are filtered by category on the frontend

### Important Notes
- ⚠️ Before deleting a category, update all products using that category
- ⚠️ Inactive categories won't show in product dropdown
- ⚠️ Category names should be unique
- ✅ You can add as many categories as needed
- ✅ Categories support images for better visual organization

## API Endpoints

### Get All Categories
```
GET /api/categories
```

### Get Single Category
```
GET /api/categories/:id
```

### Create Category (Admin Only)
```
POST /api/categories
Body: {
  "name": "Category Name",
  "description": "Description",
  "image": "https://example.com/image.jpg",
  "active": true
}
```

### Update Category (Admin Only)
```
PUT /api/categories/:id
Body: {
  "name": "Updated Name",
  "description": "Updated Description",
  "image": "https://example.com/new-image.jpg",
  "active": true
}
```

### Delete Category (Admin Only)
```
DELETE /api/categories/:id
```

## Database Schema

```javascript
{
  name: String (required, unique),
  description: String,
  image: String,
  active: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

## Tips
1. **Use descriptive names**: Make category names clear and easy to understand
2. **Add images**: Category images make the admin panel more visual
3. **Write descriptions**: Help your team understand what belongs in each category
4. **Keep it organized**: Don't create too many categories - keep it simple
5. **Test before deleting**: Make sure no products use a category before deleting it

## Troubleshooting

### Categories not showing in product dropdown
- Check if categories are marked as **Active**
- Refresh the Products Management page
- Check browser console for errors

### Can't delete a category
- Make sure no products are using this category
- Check if you have admin permissions
- Check backend logs for errors

### Categories not loading
- Make sure backend server is running
- Check MongoDB connection
- Run `SEED_CATEGORIES.bat` to reset categories

## File Structure

### Backend
```
backend/
├── models/Category.js              # Category database model
├── controllers/categoryController.js  # Category CRUD operations
├── routes/categoryRoutes.js        # Category API routes
└── utils/seedCategories.js         # Seed initial categories
```

### Frontend
```
frontend/src/
├── pages/admin/CategoriesManagement.jsx  # Category management page
├── pages/admin/ProductsManagement.jsx    # Uses categories
└── services/api.js                       # Category API calls
```

## Next Steps
1. Add categories for your business
2. Upload category images
3. Create products using these categories
4. Categories will automatically appear on the frontend

## Support
If you encounter any issues:
1. Check the browser console for errors
2. Check backend terminal for error messages
3. Make sure MongoDB is running
4. Restart both frontend and backend servers
