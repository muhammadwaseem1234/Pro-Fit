"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Libre_Baskerville, Montserrat, Inter } from "next/font/google";

// Font configuration
const headingFont = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function About() {
  const { scrollYProgress } = useScroll();
  
  // Enhanced animation values
  const yPosImage1 = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const opacityImage1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scaleImage1 = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  
  const yPosImage2 = useTransform(scrollYProgress, [0.2, 0.5], [80, 0]);
  const opacityImage2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  const yPosImage3 = useTransform(scrollYProgress, [0.4, 0.8], [80, 0]);
  const opacityImage3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div className={`min-h-screen bg-white ${bodyFont.className}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-6 z-10"
        >
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 ${headingFont.className}`}>
            Our <span className="text-white font-light">Story</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering fitness innovation since 2025
          </motion.p>
        </motion.div>
        
        {/* Animated background element */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            style={{ 
              y: yPosImage1,
              opacity: opacityImage1,
              scale: scaleImage1
            }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/about/fitness.jpg" 
              alt="Our team"
              fill
              className="object-cover object-[bottom_30%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl font-bold mb-6 ${headingFont.className}`}>
              Our <span className="text-black font-light">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded in 2025, PRO FITNESS emerged from a simple belief: everyone deserves access to world-class fitness 
              with personalized guidance. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine cutting-edge equipment with scientifically-backed training to deliver transformative results.
            </p>
          </motion.div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <h2 className={`text-4xl font-bold mb-6 ${headingFont.className}`}>
              Training <span className="text-black font-light">Philosophy</span>
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-black mr-2">✓</span>
                <span>Personalized programming tailored to your physiology</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-black mr-2">✓</span>
                <span>Nutrition guidance from certified dietitians</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-black mr-2">✓</span>
                <span>Recovery optimization through advanced modalities</span>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            style={{ y: yPosImage2, opacity: opacityImage2 }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl lg:order-0"
          >
            <Image 
              src="/about/dumbbell.jpg" 
              alt="Our facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </section>

        {/* Section 3 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: yPosImage3, opacity: opacityImage3 }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/about/teamspirit.jpg" 
              alt="Our community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl font-bold mb-6 ${headingFont.className}`}>
              Join Our <span className="text-black font-light">Community</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Beyond physical transformation, we cultivate a supportive network where members motivate each other 
              to surpass limits.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're training for competition or personal wellness, you'll find your tribe at PRO FITNESS.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}