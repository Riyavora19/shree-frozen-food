import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { inquiriesAPI } from '../../services/api';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      await inquiriesAPI.create(formData);
      toast.success('Inquiry submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit inquiry');
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt size={22} />,
      label: 'Address',
      value: 'Ahmedabad, Gujarat, India',
      link: null,
      bg: 'bg-primary/5 text-primary'
    },
    {
      icon: <FaPhone size={20} />,
      label: 'Phone',
      value: '+91 63539 97047',
      link: 'tel:+916353997047',
      bg: 'bg-orange-500/10 text-orange-650'
    },
    {
      icon: <FaEnvelope size={20} />,
      label: 'Email',
      value: 'shreefrozenfood@gmail.com',
      link: 'mailto:shreefrozenfood@gmail.com',
      bg: 'bg-indigo-500/10 text-indigo-650'
    },
    {
      icon: <FaWhatsapp size={22} />,
      label: 'WhatsApp',
      value: '+91 63539 97047',
      link: 'https://wa.me/916353997047',
      bg: 'bg-emerald-500/10 text-emerald-650'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.3),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-350 font-medium max-w-xl mx-auto"
          >
            We supply distributors, manufacturers, and retail chains. Request a commercial quote.
          </motion.p>
        </div>
      </section>

      {/* Main Info & Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Methods Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 space-y-6"
            >
              <div className="space-y-3">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/5 px-4 py-1.5 rounded-full">
                  Quick Connect
                </span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Contact Channels
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  We look forward to serving your frozen pulp requirements. Select any channel below for instant assistance.
                </p>
              </div>

              <div className="grid gap-4 pt-4">
                {contactMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      {method.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{method.label}</span>
                      {method.link ? (
                        <a
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-slate-800 text-sm font-bold hover:text-primary transition-colors mt-0.5 block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-slate-800 text-sm font-bold mt-0.5 block">{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-premium"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-slate-400 font-medium text-slate-700 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-slate-400 font-medium text-slate-700 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-slate-400 font-medium text-slate-700 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">
                      Inquiry Category
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-slate-700 text-sm bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="bulk-order">Bulk / Wholesale Quote</option>
                      <option value="product">Product Customization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">
                    Detailed Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Type details here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-slate-400 font-medium text-slate-700 text-sm"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-premium hover:shadow-glow-primary text-white py-3.5 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <FaTelegramPlane size={16} className={`${loading ? 'animate-ping' : ''}`} />
                  <span>{loading ? 'Submitting Form...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
