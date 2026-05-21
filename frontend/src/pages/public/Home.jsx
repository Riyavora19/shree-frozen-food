import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf, FaTruck, FaAward } from 'react-icons/fa';
import { productsAPI } from '../../services/api';
import { toast } from 'react-toastify';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await productsAPI.getAll({ featured: true });
      setFeaturedProducts(response.data.slice(0, 4));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <FaLeaf size={40} />,
      title: '100% Natural',
      description: 'Pure fruit pulps with no artificial additives or preservatives'
    },
    {
      icon: <FaTruck size={40} />,
      title: 'Fast Delivery',
      description: 'Fresh frozen pulps delivered quickly to maintain quality'
    },
    {
      icon: <FaAward size={40} />,
      title: 'Premium Quality',
      description: 'Made from carefully selected ripe fruits'
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: 'Food Safety',
      description: 'FSSAI certified with strict hygiene standards'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Quality Frozen Fruit Pulps
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Pure and natural frozen pulps - Chikoo, Mango, Jambu, and more. Perfect for juices, smoothies, and desserts
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  View Products
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600"
                alt="Frozen Fruit Pulps"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg">
              We are committed to delivering the best frozen fruit pulps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our premium selection of frozen fruit pulps
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mx-auto"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.image || 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400'}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Link
                      to={`/products/${product._id}`}
                      className="text-secondary hover:text-secondary-dark font-semibold"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl mb-8">
              Get in touch with us for bulk orders and special inquiries
            </p>
            <Link
              to="/contact"
              className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-block"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
