"use client";

import React from 'react';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaWrench, 
  FaFaucet, 
  FaHardHat, 
  FaLeaf, 
  FaHome, 
  FaTools, 
  FaBolt, 
  FaSnowflake, 
  FaArrowRight, 
  FaCheckCircle, 
  FaEnvelope,
  FaUsers,
  FaHeart,
  FaGavel,
  FaChartLine
} from 'react-icons/fa';
import { HiOutlineClock, HiOutlineChartBar, HiOutlineTrendingUp } from 'react-icons/hi';
import { HiOutlineMapPin, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const IndustriesPage = () => {
  // Define B2B Service Industries
  const b2bIndustries = [
    {
      title: "Recruiting & Staffing",
      icon: <FaUsers className="text-3xl text-amber-400" />,
      description: "Scale your recruiting business with AI-powered candidate sourcing, automated screening, and placement tracking systems that fill positions faster.",
      benefits: [
        "AI-powered candidate matching",
        "Automated screening workflows",
        "Client relationship management",
        "Performance tracking and analytics"
      ],
      link: "/industries/recruiting"
    },
    {
      title: "SaaS & Software",
      icon: <FaBrain className="text-3xl text-purple-400" />,
      description: "Accelerate growth with AI-driven user acquisition, churn prediction, and revenue optimization strategies designed for software companies.",
      benefits: [
        "Product-led growth optimization",
        "Developer marketing strategies",
        "Account-based marketing campaigns",
        "Churn prediction and prevention"
      ],
      link: "/industries/saas"
    },
    {
      title: "Insurance Brokerages",
      icon: <FaTools className="text-3xl text-cyan-400" />,
      description: "Transform your insurance agency with AI-powered lead qualification, automated quoting, and personalized policy recommendations.",
      benefits: [
        "Instant quote generation",
        "Risk assessment automation",
        "Cross-selling opportunity detection",
        "Client retention strategies"
      ],
      link: "/industries/insurance"
    },
    {
      title: "Consulting Firms",
      icon: <FaBrain className="text-3xl text-indigo-400" />,
      description: "Enhance your consulting practice with AI-powered research, automated reporting, and intelligent project management systems.",
      benefits: [
        "AI research assistance",
        "Automated report generation",
        "Knowledge management systems",
        "Client insight analytics"
      ],
      link: "/industries/consulting"
    },
    {
      title: "Marketing Agencies",
      icon: <FaChartLine className="text-3xl text-pink-400" />,
      description: "Supercharge your agency with AI-powered campaign creation, performance optimization, and scalable client management.",
      benefits: [
        "AI campaign generation",
        "Multi-client dashboard",
        "Performance prediction models",
        "Automated reporting systems"
      ],
      link: "/industries/marketing-agencies"
    },
    {
      title: "Financial Advisors",
      icon: <FaChartLine className="text-3xl text-emerald-400" />,
      description: "Grow your practice with AI-driven client acquisition, portfolio optimization, and automated financial planning tools.",
      benefits: [
        "Lead qualification automation",
        "Portfolio optimization AI",
        "Compliance automation",
        "Client communication tracking"
      ],
      link: "/industries/financial-advisors"
    }
  ];

  // Define Local Service Industries
  const localServiceIndustries = [
    {
      title: "Healthcare & Medical",
      icon: <FaHeart className="text-3xl text-red-400" />,
      description: "Transform your medical practice, dental office, or medical spa with AI-powered patient acquisition, appointment optimization, and targeted healthcare marketing.",
      benefits: [
        "Patient acquisition campaigns",
        "Appointment scheduling optimization",
        "Treatment-specific marketing",
        "Patient retention programs"
      ],
      link: "/industries/medical"
    },
    {
      title: "Legal Services",
      icon: <FaGavel className="text-3xl text-blue-400" />,
      description: "Transform your law practice with AI-powered client intake, document management, and marketing systems that attract qualified leads.",
      benefits: [
        "Automated client intake workflows",
        "Practice area-specific marketing",
        "Document automation and management",
        "Client communication tracking"
      ],
      link: "/industries/legal"
    },
    {
      title: "Roofing",
      icon: <FaHome className="text-3xl text-orange-400" />,
      description: "Scale your roofing company with storm-response automation, lead qualification, and marketing systems that generate qualified inspection requests.",
      benefits: [
        "Weather event triggered marketing",
        "Aerial imagery assessment",
        "Material estimation automation",
        "Insurance claim process assistance"
      ],
      link: "/industries/roofing"
    },
    {
      title: "General Contracting",
      icon: <FaHardHat className="text-3xl text-yellow-400" />,
      description: "Streamline your contracting business with project management automation, subcontractor coordination, and portfolio marketing.",
      benefits: [
        "Project timeline optimization",
        "Subcontractor management",
        "Permit and inspection scheduling",
        "Portfolio-based lead generation"
      ],
      link: "/industries/contracting"
    },
    {
      title: "HVAC",
      icon: <FaSnowflake className="text-3xl text-blue-400" />,
      description: "Optimize your HVAC business for seasonal demand, improve technician routing, and capture high-value installation contracts.",
      benefits: [
        "Seasonal marketing automation",
        "Technician route optimization",
        "Equipment upgrade opportunity detection",
        "Maintenance contract conversion systems"
      ],
      link: "/industries/hvac"
    },
    {
      title: "Plumbing",
      icon: <FaFaucet className="text-3xl text-blue-400" />,
      description: "Transform your plumbing business with AI-driven scheduling, customer management, and targeted local marketing.",
      benefits: [
        "Automated dispatch for emergency calls",
        "Predictive maintenance scheduling",
        "Local SEO domination",
        "Customer history tracking"
      ],
      link: "/industries/plumbing"
    },
    {
      title: "Electrical",
      icon: <FaBolt className="text-3xl text-yellow-400" />,
      description: "Streamline your electrical contracting business with intelligent job quoting, inventory management, and targeted marketing.",
      benefits: [
        "Automated quote generation",
        "Inventory and parts management",
        "Code compliance tracking",
        "Targeted marketing for high-value projects"
      ],
      link: "/industries/electrical"
    }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">        <main className="flex-grow">
        {/* Header Image Section */}
        <img
          src="/static/images/industries.webp"
          alt="SpotCircuit industries image"
          className="h-[75px] w-full object-cover overflow-hidden"
        />
        {/* Hero Section with modern styling */}
        <section id="hero" className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Icon */}
              <div className="icon-container mb-6 glow-effect">
                <FaTools className="text-2xl text-white" />
              </div>
              <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                AI-Powered Growth for Service Businesses
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                SpotCircuit builds custom AI solutions for home service, medical spa, legal, and recruiting businesses. Generate qualified leads, optimize operations, and scale your business with intelligent automation designed for your specific industry.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="#industries">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                    Find My Industry
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Common Challenges Section */}
        <section id="challenges" className="py-16 md:py-24 bg-black relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Common Challenges Facing <span className="gradient-text">Service Businesses</span></h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Whether you're in home services, medical aesthetics, legal services, or recruiting, these challenges are likely holding back your growth and profitability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Challenge 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="modern-card transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="icon-container mb-4">
                  <HiOutlineClock className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Feast or Famine Cycles</h3>
                <p className="text-gray-300">Unpredictable busy and slow periods make it difficult to maintain consistent cash flow and properly staff your business.</p>
              </motion.div>

              {/* Challenge 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="modern-card transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="icon-container mb-4">
                  <HiOutlineMapPin className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Inefficient Routing & Scheduling</h3>
                <p className="text-gray-300">Wasted time and fuel from poorly optimized service routes and scheduling conflicts between jobs.</p>
              </motion.div>

              {/* Challenge 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="modern-card transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="icon-container mb-4">
                  <HiOutlineChartBar className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Marketing That Doesn't Work</h3>
                <p className="text-gray-300">Wasted ad spend on generic marketing that doesn't target the right customers in your service area.</p>
              </motion.div>

              {/* Challenge 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="modern-card transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="icon-container mb-4">
                  <HiOutlineWrenchScrewdriver className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Technician Shortages</h3>
                <p className="text-gray-300">Difficulty finding, training, and retaining qualified technicians to meet service demand.</p>
              </motion.div>

              {/* Challenge 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="modern-card transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="icon-container mb-4">
                  <FaBrain className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Manual Processes</h3>
                <p className="text-gray-300">Time wasted on paperwork, manual scheduling, and other administrative tasks that could be automated.</p>
              </motion.div>

              {/* Challenge 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="modern-card transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="icon-container mb-4">
                  <HiOutlineTrendingUp className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Scaling Difficulties</h3>
                <p className="text-gray-300">Challenges in growing your business beyond a certain point due to operational bottlenecks.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Navigation Menu */}
        <section id="industries-nav" className="py-8 bg-gray-900 border-b border-gray-800 sticky top-20 z-30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* B2B Services */}
              <div>
                <h3 className="text-amber-400 font-semibold mb-3 text-center">B2B Services</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {b2bIndustries.map((industry) => (
                    <Link 
                      key={industry.title} 
                      href={industry.link}
                      className="px-3 py-1.5 rounded-full bg-amber-900/30 hover:bg-amber-700/50 text-amber-300 hover:text-white transition-all duration-300 text-sm"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Local Services */}
              <div>
                <h3 className="text-blue-400 font-semibold mb-3 text-center">Local Services</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {localServiceIndustries.map((industry) => (
                    <Link 
                      key={industry.title} 
                      href={industry.link}
                      className="px-3 py-1.5 rounded-full bg-blue-900/30 hover:bg-blue-700/50 text-blue-300 hover:text-white transition-all duration-300 text-sm"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-16 md:py-24 bg-gray-900 relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="icon-container mb-6 glow-effect inline-block">
                <FaTools className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">AI Solutions for <span className="gradient-text">Every Service Industry</span></h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                SpotCircuit builds custom AI systems tailored to the unique needs of each service industry. Find your industry below to see how we can help you grow.
              </p>
            </motion.div>

            {/* B2B Services Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-amber-400 text-center mb-8">B2B Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {b2bIndustries.map((industry, index) => (
                  <Link href={industry.link} key={industry.title} className="block">
                    <motion.div
                      id={industry.title.toLowerCase().replace(/\s+/g, '-')}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="industry-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 scroll-mt-32 cursor-pointer h-full"
                    >
                      <div className="flex items-center mb-6">
                        <div className="mr-4 p-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                          {industry.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{industry.description}</p>
                      <ul className="space-y-3 mb-6">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheckCircle className="text-amber-400 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-200">
                          View {industry.title} solution <FaArrowRight className="ml-2" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Local Services Section */}
            <div>
              <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Local Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localServiceIndustries.map((industry, index) => (
                  <Link href={industry.link} key={industry.title} className="block">
                    <motion.div
                      id={industry.title.toLowerCase().replace(/\s+/g, '-')}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="industry-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 scroll-mt-32 cursor-pointer h-full"
                    >
                      <div className="flex items-center mb-6">
                        <div className="mr-4 p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                          {industry.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{industry.description}</p>
                      <ul className="space-y-3 mb-6">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200">
                          View {industry.title} solution <FaArrowRight className="ml-2" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-black relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">How We <span className="gradient-text">Transform</span> Your Service Business</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Our proven process helps service businesses automate operations, generate qualified leads, and scale profitably across any industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="process-card relative"
              >
                <div className="step-number">1</div>
                <div className="icon-container mb-4">
                  <FaHome className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Business Analysis</h3>
                <p className="text-gray-300">We analyze your current operations, identify bottlenecks, and pinpoint growth opportunities specific to your service area.</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="process-card relative"
              >
                <div className="step-number">2</div>
                <div className="icon-container mb-4">
                  <FaBrain className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Custom AI Strategy</h3>
                <p className="text-gray-300">We design a tailored AI strategy that addresses your specific industry challenges and growth goals.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="process-card relative"
              >
                <div className="step-number">3</div>
                <div className="icon-container mb-4">
                  <FaTools className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Implementation</h3>
                <p className="text-gray-300">We build and deploy custom AI systems that integrate with your existing tools and workflows.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 px-4 bg-gray-900 overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="gradient-text">Transform</span> Your Service Business?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Take the first step toward automation and optimization. Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-black relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Frequently Asked <span className="gradient-text">Questions</span></h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Get answers to common questions about our AI solutions for service businesses.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <FaqAccordion 
                structuredData={false}
                faqs={[
                  {
                    question: "How quickly can I expect to see results from your AI solutions?",
                    answer: "Most of our home service clients begin seeing measurable improvements within 30-60 days. This includes increased lead quality, improved operational efficiency, and better resource utilization. The full impact of our AI systems typically becomes apparent within 90 days as the AI learns and optimizes based on your specific business patterns."
                  },
                  {
                    question: "Do I need technical expertise to use your AI systems?",
                    answer: "Not at all. We design our AI solutions to be user-friendly and intuitive, even for those with minimal technical experience. Our team provides comprehensive training and ongoing support to ensure you and your staff can easily utilize all features. The systems integrate seamlessly with your existing tools and workflows."
                  },
                  {
                    question: "How do you handle seasonal fluctuations common in home service businesses?",
                    answer: "Our AI systems are specifically designed to address seasonal fluctuations. They analyze historical data, weather patterns, and market trends to predict demand surges and lulls. This allows for proactive marketing during slower periods and optimal resource allocation during peak times. The result is more consistent revenue throughout the year."
                  },
                  {
                    question: "Can your solutions integrate with my existing CRM and scheduling software?",
                    answer: "Yes, our AI systems are built to integrate with most popular CRM, scheduling, and field service management software used in the home service industry. This includes platforms like ServiceTitan, Housecall Pro, Jobber, and many others. If you use a custom or less common solution, we can develop custom integrations as needed."
                  },
                  {
                    question: "How do you target local customers specifically in my service area?",
                    answer: "We employ hyper-local targeting strategies including geofenced advertising, local SEO optimization, and neighborhood-specific campaigns. Our AI analyzes demographic data, service history, and property characteristics in your service area to identify the most promising prospects. This ensures your marketing budget is focused on customers most likely to need your services."
                  },
                  {
                    question: "What makes your approach different from traditional marketing agencies?",
                    answer: "Unlike traditional agencies that focus primarily on marketing, we take a holistic approach to your entire business operation. Our AI solutions address marketing, operations, scheduling, customer management, and business intelligence in an integrated system. Additionally, our solutions continuously learn and improve based on your specific business data, rather than applying generic industry templates."
                  }
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section with modern styling */}
        <section id="final-cta" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center relative overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Service Business?</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Let SpotCircuit be your partner in navigating the complexities of AI and achieving sustainable growth in your specific industry.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/contact" className="inline-block">
                  <span className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-xl transition duration-300 text-lg transform hover:-translate-y-1 hover:shadow-lg inline-block">
                    Get Started Today
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>      </div>
    </>
  );
};

export default IndustriesPage;
