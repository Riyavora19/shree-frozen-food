import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaArrowRight, FaBoxOpen } from 'react-icons/fa';
import { productsAPI } from '../../services/api';
import Loader from '../../components/Loader';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedCategory) params.category = selectedCategory;
      if (searchTerm) params.search = searchTerm;
      
      const response = await productsAPI.getAll(params);
      // Ensure we always set an array
      const data = response.data;
      setProducts(Array.isArray(data) ? data : data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await productsAPI.getCategories();
      const data = response.data;
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [selectedCategory, searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.3),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Product Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-350 font-medium max-w-xl mx-auto"
          >
            Explore our premium selection of cold-preserved frozen fruit pulps.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:max-w-md relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                <FaSearch size={16} />
              </span>
              <input
                type="text"
                placeholder="Search premium pulps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-slate-400 transition-all font-medium text-slate-700"
              />
            </div>

            {/* Categories Horizontal Selector / Tabs */}
            <div className="w-full flex items-center space-x-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-slate-500 font-bold text-xs uppercase tracking-wider flex items-center space-x-1 flex-shrink-0">
                <FaFilter size={10} className="text-slate-400" />
                <span>Filter:</span>
              </span>
              
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${
                  selectedCategory === ''
                    ? 'bg-primary text-white shadow-premium shadow-glow-primary scale-105'
                    : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Pulps
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-premium shadow-glow-primary scale-105'
                      : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <Loader />
          ) : products.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-150 max-w-xl mx-auto space-y-4">
              <div className="text-slate-350 flex justify-center">
                <FaBoxOpen size={48} />
              </div>
              <h3 className="text-xl font-bold text-slate-700">No pulps match your query</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto font-medium">
                Try clearing your search term or select another category filter to find our premium frozen fruit pulps.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-premium hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400'}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-555 group-hover:scale-105"
                    />
                    {!product.available && (
                      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-500/90 text-white font-extrabold uppercase tracking-widest text-xs px-4 py-2 rounded-xl shadow-lg border border-red-400/20">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-widest bg-white/95 text-primary px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed font-medium">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Weight</span>
                        <span className="text-slate-700 text-xs font-black mt-0.5">{product.weight}</span>
                      </div>
                      {product.price > 0 ? (
                        <div className="flex flex-col items-end">
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Price</span>
                          <span className="text-primary text-sm font-black mt-0.5">₹{product.price}</span>
                        </div>
                      ) : (
                        <span className="text-[10px] text-secondary font-black uppercase tracking-wider bg-secondary/5 px-2 py-1 rounded-md">Wholesale</span>
                      )}
                    </div>

                    <Link
                      to={`/products/${product._id}`}
                      className="mt-6 block text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl hover:shadow-premium hover:shadow-glow-primary transition-all duration-300 flex items-center justify-center space-x-1.5"
                    >
                      <span>View Details</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
