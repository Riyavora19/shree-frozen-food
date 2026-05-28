import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaEye, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 md:py-28 text-center overflow-hidden">
        {/* Background Mesh Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.3),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            About Shree Frozen Food
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 font-medium max-w-xl mx-auto"
          >
            Premium manufacturing and wholesale supply of pure tropical fruit pulps.
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-lg opacity-70" />
              <div className="relative border border-slate-100 rounded-2xl overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600"
                  alt="Quality fruit sourcing"
                  className="w-full h-[450px] object-cover filter brightness-95"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/5 px-4 py-1.5 rounded-full">
                Our Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Pioneering Pure Fruit Solutions
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium">
                Shree Frozen Food is a premier manufacturer and supplier of top-tier frozen fruit pulps. Established with a firm commitment to purity, we specialize in high-yield pulping of natural tropical fruits, specifically Chikoo, Mango, Jambu, and Guava.
              </p>
              <p className="text-slate-650 leading-relaxed font-medium">
                Our state-of-the-art manufacturing facilities utilize quick-freeze preservation technologies. This critical process halts enzyme degradation immediately, keeping the original fiber matrices, vibrant colors, organic enzymes, and mineral content intact.
              </p>
              <p className="text-slate-650 leading-relaxed font-medium">
                By maintaining a direct relationship with farmers, we select fruits at absolute peak ripeness. This guarantees a rich flavor yield, making our pulps ideal for juice blenders, dairy manufacturers, ice cream parlors, and artisanal bakers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-premium border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <FaBullseye size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                To deliver nature's best fruit pulps globally by adopting zero-chemical freezing protocols, encouraging sustainable agriculture, and ensuring complete consumer confidence through absolute food safety standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-premium border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                <FaEye size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                To establish Shree Frozen Food as the industry benchmark for commercial cold-preserved pulps, recognized for supply reliability, organic integrity, and customer-first service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Rigorous Quality Standards
            </h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto font-medium">
              Every stage of processing undergoes strict validation to meet premium grade parameters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'FSSAI Certified Manufacturing', desc: 'Compliant with national safety codes.' },
              { title: 'ISO Quality Management', desc: 'Structured, traceable processes.' },
              { title: 'Strict Hygiene Protocols', desc: 'Contact-free manufacturing standards.' },
              { title: 'Regular Lab Analysis', desc: 'Periodic testing for absolute quality assurance.' },
              { title: 'Continuous Cold Chain', desc: 'Guaranteed uninterrupted low temperatures.' },
              { title: 'Batch Traceability Systems', desc: 'Quick trace from farm to dispatcher.' }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-300"
              >
                <FaCheckCircle className="text-secondary text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-slate-800 tracking-tight">{standard.title}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-1">{standard.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.25),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center shadow-lg">
              <FaAward size={24} className="text-secondary animate-pulse" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Food Safety is Our Utmost Priority
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From initial sanitization to flash freezing and air-lock packing, our facilities follow sanitary SOPs audited by global quality standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
