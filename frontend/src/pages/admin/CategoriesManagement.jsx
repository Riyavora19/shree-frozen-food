import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus, FaTag } from 'react-icons/fa';
import { categoriesAPI } from '../../services/api';
import { toast } from 'react-toastify';

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    active: true
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await categoriesAPI.getAll();
      setCategories(response.data);
    } catch (error) {
      toast.error('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error('Category name is required');
      return;
    }

    try {
      if (editingCategory) {
        await categoriesAPI.update(editingCategory._id, formData);
        toast.success('Category updated successfully');
      } else {
        await categoriesAPI.create(formData);
        toast.success('Category created successfully');
      }
      
      setShowModal(false);
      resetForm();
      fetchCategories();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save category');
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || '',
      image: category.image || '',
      active: category.active
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category? Products using this category will need to be updated.')) {
      try {
        await categoriesAPI.delete(id);
        toast.success('Category deleted successfully');
        fetchCategories();
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to delete category');
      }
    }
  };

  const resetForm = () => {
    setEditingCategory(null);
    setFormData({
      name: '',
      description: '',
      image: '',
      active: true
    });
  };

  const handleAddNew = () => {
    resetForm();
    setShowModal(true);
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Categories Management</h1>
          <p className="text-gray-600 mt-2">Manage product categories</p>
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          <FaPlus />
          <span>Add Category</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      ) : categories.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <FaTag className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-xl">No categories found</p>
          <button
            onClick={handleAddNew}
            className="mt-4 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
          >
            Add Your First Category
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40">
                <img
                  src={category.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400'}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                {!category.active && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Inactive
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <FaTag className="text-secondary" />
                  <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description || 'No description provided'}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add/Edit Category Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingCategory ? 'Edit Category' : 'Add New Category'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Frozen Vegetables"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Brief description of this category"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Optional: Add an image URL for this category
                </p>
              </div>

              {/* Active Checkbox */}
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="active"
                    checked={formData.active}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-gray-700">Active (visible to users)</span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {editingCategory ? 'Update Category' : 'Add Category'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CategoriesManagement;
