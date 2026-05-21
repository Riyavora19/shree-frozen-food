import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { productsAPI } from '../../services/api';
import Loader from '../../components/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Product not found</h2>
          <Link to="/products" className="text-primary hover:text-primary-dark">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600'}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold">{product.category}</span>
            <h1 className="text-4xl font-bold text-primary mt-2 mb-4">
              {product.name}
            </h1>
            
            {product.price > 0 && (
              <div className="text-3xl font-bold text-primary mb-4">
                ₹{product.price}
              </div>
            )}

            <div className="mb-6">
              <span className="text-gray-600">Weight: </span>
              <span className="font-semibold">{product.weight}</span>
            </div>

            <div className="mb-6">
              {product.available ? (
                <span className="inline-flex items-center text-green-600 font-semibold">
                  <FaCheckCircle className="mr-2" />
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {product.nutrition && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Nutrition Information
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {product.nutrition.calories && (
                      <div>
                        <span className="text-gray-600">Calories:</span>
                        <span className="ml-2 font-semibold">{product.nutrition.calories}</span>
                      </div>
                    )}
                    {product.nutrition.protein && (
                      <div>
                        <span className="text-gray-600">Protein:</span>
                        <span className="ml-2 font-semibold">{product.nutrition.protein}</span>
                      </div>
                    )}
                    {product.nutrition.carbs && (
                      <div>
                        <span className="text-gray-600">Carbs:</span>
                        <span className="ml-2 font-semibold">{product.nutrition.carbs}</span>
                      </div>
                    )}
                    {product.nutrition.fat && (
                      <div>
                        <span className="text-gray-600">Fat:</span>
                        <span className="ml-2 font-semibold">{product.nutrition.fat}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                Inquire Now
              </Link>
              <a
                href="tel:+916353997047"
                className="flex-1 bg-secondary hover:bg-secondary-dark text-white py-3 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                Call to Order
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
