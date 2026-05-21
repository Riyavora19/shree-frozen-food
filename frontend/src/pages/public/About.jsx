import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Shree Frozen Food
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            Your trusted partner in premium frozen fruit pulps
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Shree Frozen Food is a leading manufacturer and supplier of premium quality frozen fruit pulps. 
                Established with a vision to provide pure, natural, and convenient fruit pulp solutions, 
                we specialize in Chikoo, Mango, Jambu, and various other tropical fruit pulps.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our state-of-the-art processing facility is equipped with modern freezing technology and follows 
                strict quality control measures to ensure that every batch retains the natural taste, color, 
                and nutritional value of fresh fruits.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We take pride in sourcing the finest quality fruits from trusted farmers and processing them 
                with minimal handling to preserve their natural goodness. Perfect for juices, smoothies, desserts, and ice creams.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide premium quality frozen food products that combine convenience, nutrition, 
                and taste, while maintaining the highest standards of food safety and customer satisfaction. 
                We strive to make healthy eating accessible and convenient for every household.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted and preferred brand in the frozen food industry, 
                known for innovation, quality, and customer-centric approach. We envision a future 
                where every household enjoys the convenience of our premium frozen food products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              Quality Standards
            </h2>
            <p className="text-gray-600 text-lg">
              We maintain the highest standards in every aspect of our operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'FSSAI Certified Manufacturing',
              'ISO Quality Management',
              'Strict Hygiene Protocols',
              'Regular Quality Testing',
              'Cold Chain Management',
              'Traceability Systems'
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md"
              >
                <FaCheckCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Food Safety is Our Priority
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We follow stringent food safety protocols at every stage - from sourcing raw materials 
              to packaging and delivery. Our facility is regularly audited and certified by food 
              safety authorities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
