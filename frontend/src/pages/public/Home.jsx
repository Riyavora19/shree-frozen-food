import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf, FaTruck, FaAward, FaArrowRight } from 'react-icons/fa';
import { productsAPI } from '../../services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await productsAPI.getAll({ featured: true });
      const data = response.data;
      setFeaturedProducts(Array.isArray(data) ? data.slice(0, 4) : []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setFeaturedProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <FaLeaf size={32} />,
      title: '100% Pure & Natural',
      description: 'Pure fruit pulps directly sourced and frozen with zero artificial additives or preservatives.',
      color: 'from-green-500/10 to-emerald-500/5',
      iconColor: 'text-emerald-500'
    },
    {
      icon: <FaTruck size={32} />,
      title: 'Reliable Cold Chain',
      description: 'Strict temperature control from processing to delivery to preserve taste and quality.',
      color: 'from-blue-500/10 to-indigo-500/5',
      iconColor: 'text-blue-500'
    },
    {
      icon: <FaAward size={32} />,
      title: 'Premium Selection',
      description: 'Handpicked, perfectly ripe tropical fruits processed with cutting-edge hygiene standards.',
      color: 'from-amber-500/10 to-orange-500/5',
      iconColor: 'text-amber-500'
    },
    {
      icon: <FaCheckCircle size={32} />,
      title: 'FSSAI Certified',
      description: 'Full compliance with national food safety guidelines for secure and trusted wholesale supply.',
      color: 'from-purple-500/10 to-pink-500/5',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 md:py-36 flex items-center justify-center">
        {/* Background Mesh Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.4),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,140,66,0.25),transparent_40%)]" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-left"
            >
              <span className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                ✨ Trusted Wholesale Partner
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
                Premium Quality <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-400">
                  Frozen Fruit Pulps
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-slate-300 font-medium leading-relaxed max-w-xl">
                Pure, natural, and nutrient-rich pulps. Sourced from the finest Alphonso Mangoes, sweet Chikoo, Jambu, and Guava. Excellent for smoothies, desserts, and manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3.5 rounded-full font-bold shadow-premium hover:shadow-glow-secondary hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore Pulps</span>
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 px-8 py-3.5 rounded-full font-bold transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-35" />
              <div className="relative border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-slate-900/60 p-2">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600"
                  alt="Premium Fruit Pulps"
                  className="rounded-xl w-full h-[400px] object-cover filter brightness-95"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
              Why Shree Frozen Food
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Standard of Excellence
            </h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto font-medium">
              We specialize in cold-chain logistics and quality processing to ensure premium output.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-premium border border-slate-100 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.color} ${feature.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div className="text-left">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/5 px-4 py-1.5 rounded-full">
                Featured Selection
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
                Our Premium Pulps
              </h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-primary font-bold hover:text-secondary group transition-colors"
            >
              <span>View all products</span>
              <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-premium hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image || 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400'}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-widest bg-white/95 text-primary px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed font-medium">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-50">
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                        {product.weight}
                      </span>
                      <Link
                        to={`/products/${product._id}`}
                        className="text-xs font-extrabold text-secondary hover:text-secondary-dark flex items-center space-x-1.5 group/btn"
                      >
                        <span>Details</span>
                        <FaArrowRight className="text-[10px] transform group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,66,0.1),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Looking for Wholesale & Bulk Supply?
            </h2>
            <p className="text-slate-350 text-lg mb-8 font-medium leading-relaxed">
              We cater to distributors, restaurants, and food brands with customized packing and competitive commercial pricing.
            </p>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-10 py-4 rounded-full font-bold shadow-premium hover:shadow-glow-secondary hover:scale-105 transition-all duration-300 inline-block"
            >
              Get In Touch Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
