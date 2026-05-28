import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaExclamationTriangle, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { productsAPI } from '../../services/api';
import Loader from '../../components/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchProduct();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50/20">
        <div className="text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-premium max-w-sm">
          <FaExclamationTriangle className="text-secondary text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-black text-slate-800 mb-2">Product Not Found</h2>
          <p className="text-slate-400 text-sm mb-6 font-medium">The product details you are trying to view are currently unavailable.</p>
          <Link 
            to="/products" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-xl transition-all"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Define nutrient units and icons for visual style
  const nutritionGrid = [
    { key: 'calories', label: 'Calories', color: 'bg-orange-50 text-orange-650' },
    { key: 'protein', label: 'Protein', color: 'bg-emerald-50 text-emerald-650' },
    { key: 'carbs', label: 'Carbohydrates', color: 'bg-blue-50 text-blue-650' },
    { key: 'fat', label: 'Fats', color: 'bg-pink-50 text-pink-650' }
  ];

  return (
    <div className="py-12 bg-slate-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center text-slate-500 hover:text-primary font-bold text-sm mb-8 transition-colors group"
        >
          <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </Link>

        {/* Detail Box */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl blur-lg pointer-events-none" />
            <div className="relative border border-slate-100 rounded-3xl overflow-hidden bg-white p-2.5 shadow-premium">
              <img
                src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600'}
                alt={product.name}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/5 px-4 py-1.5 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-850 mt-4 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price & Weight Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-5">
              <div>
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Quantity / Weight</span>
                <span className="text-slate-800 text-lg font-black mt-1 block">{product.weight}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Commercial Pricing</span>
                {product.price > 0 ? (
                  <span className="text-primary text-xl font-black mt-1 block">₹{product.price}</span>
                ) : (
                  <span className="text-secondary text-sm font-black uppercase tracking-wider bg-secondary/5 px-2.5 py-1 rounded-md inline-block mt-1">Wholesale Quote</span>
                )}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 font-bold uppercase">Status:</span>
              {product.available ? (
                <span className="inline-flex items-center text-emerald-600 font-extrabold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <FaCheckCircle className="mr-1.5" />
                  <span>In Stock (Ready)</span>
                </span>
              ) : (
                <span className="inline-flex items-center text-red-500 font-extrabold text-sm bg-red-50 px-3 py-1 rounded-full border border-red-100">
                  <span>Out of Stock</span>
                </span>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-slate-800 uppercase tracking-wide">Description</h3>
              <p className="text-slate-650 leading-relaxed text-sm font-medium">{product.description}</p>
            </div>

            {/* Nutrition Information */}
            {product.nutrition && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-slate-800 uppercase tracking-wide">Nutrition (Per 100g)</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {nutritionGrid.map((nut) => {
                    const value = product.nutrition[nut.key];
                    if (!value) return null;
                    return (
                      <div key={nut.key} className={`${nut.color} p-4 rounded-2xl text-center border border-white shadow-sm`}>
                        <span className="text-xs font-black block tracking-tight">{value}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-80 mt-1 block">{nut.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/916353997047?text=Hi%20Shree%20Frozen%20Food,%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-2xl font-bold text-center shadow-premium hover:shadow-glow shadow-emerald-500/10 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp Inquiry</span>
              </a>
              <a
                href="tel:+916353997047"
                className="flex-1 bg-gradient-to-r from-secondary to-secondary-dark text-white py-3.5 rounded-2xl font-bold text-center shadow-premium hover:shadow-glow-secondary hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaPhone size={14} />
                <span>Call to Order</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
