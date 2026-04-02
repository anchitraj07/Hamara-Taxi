import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Car, 
  Users, 
  Briefcase, 
  Menu, 
  X,
  Smartphone,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Hamara Taxi Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-slate-900 block leading-tight">HAMARA TAXI</span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Begusarai</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-slate-700 hover:text-yellow-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:8709570320" 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="tel:8709570320" 
              className="bg-yellow-400 text-slate-900 p-2 rounded-lg shadow-sm active:scale-95 transition-transform"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 active:scale-95 transition-transform"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-6 space-y-4">
                <a 
                  href="tel:8709570320"
                  className="w-full bg-slate-900 text-white flex justify-center items-center gap-3 py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all"
                >
                  <Phone className="h-5 w-5 text-yellow-400" />
                  Call Now
                </a>
                <a 
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-slate-100 text-slate-900 flex justify-center items-center gap-3 py-4 rounded-2xl font-bold text-lg shadow-sm active:scale-[0.98] transition-all"
                >
                  <Smartphone className="h-5 w-5 text-yellow-500" />
                  Download App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400/10 skew-x-12 transform origin-right hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Now Serving Begusarai & Beyond
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Safar Bharose Ka <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
                Hamara Taxi
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the most reliable and professional taxi service in Begusarai. Whether it's a quick city ride or a long outstation journey, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 px-4 sm:px-0">
              <a 
                href="tel:8709570320" 
                className="bg-slate-900 text-white px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                Book a Ride
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://play.google.com/store" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Get it on</span>
                  <span className="text-sm">Play Store</span>
                </div>
                <Smartphone className="h-6 w-6 text-yellow-500" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 border-t border-slate-200 pt-8 overflow-x-auto">
              <div className="flex-shrink-0">
                <div className="text-xl sm:text-2xl font-bold text-slate-900">18+</div>
                <div className="text-[10px] sm:text-sm text-slate-500 font-medium uppercase">Team</div>
              </div>
              <div className="w-px h-10 bg-slate-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <div className="text-xl sm:text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-[10px] sm:text-sm text-slate-500 font-medium uppercase">Service</div>
              </div>
              <div className="w-px h-10 bg-slate-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <div className="flex items-center gap-1">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">4.9</div>
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="text-[10px] sm:text-sm text-slate-500 font-medium uppercase">Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-[2.5rem] sm:rounded-[3rem] p-6 shadow-2xl overflow-hidden aspect-square flex items-center justify-center group max-w-[320px] sm:max-w-none mx-auto">
               <img src={logoSrc} alt="Hamara Taxi Large Logo" className="w-full h-auto max-w-[280px] group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" />
               <div className="absolute inset-0 bg-taxi-pattern opacity-20" />
            </div>
            
            {/* Floating Info Cards - Hidden on very small screens, resized on others */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl z-20 flex items-center gap-3 sm:gap-4 border border-slate-50"
            >
              <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg sm:rounded-full">
                <ShieldCheck className="text-green-600 h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm">Verified</div>
                <div className="text-[10px] text-slate-500">Captains</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl z-20 flex items-center gap-3 sm:gap-4 border border-slate-50"
            >
              <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg sm:rounded-full">
                <Clock className="text-blue-600 h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm">Punctual</div>
                <div className="text-[10px] text-slate-500">Service</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Daily Taxi Booking',
      description: 'Reliable city commute with professional drivers for your everyday travel needs in Begusarai.',
      icon: Car,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Traveller Service',
      description: 'Comfortable tempo travellers for group trips, family vacations, and wedding transportation.',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Outstation Tours',
      description: 'Well-planned religious tours and outstation trips with safe and experienced captains.',
      icon: MapPin,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Driver Support',
      description: '24/7 support for our driver captains and fleet coordination for smooth operations.',
      icon: ShieldCheck,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Booking Management',
      description: 'Advanced dispatch system for efficient trip coordination and zero waiting time.',
      icon: Briefcase,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Branding & Support',
      description: 'Professional transport mobility solutions with dedicated digital and offline support.',
      icon: Star,
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-yellow-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">What We Offer</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Hamara Taxi provides a comprehensive range of mobility solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className="p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-yellow-200 hover:shadow-2xl hover:shadow-yellow-100/50 transition-all bg-white group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-slate-900 font-bold text-sm cursor-pointer group-hover:text-yellow-600 transition-colors">
                Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const highlights = [
    'Professional & Scalable Model',
    '24/7 Customer Support',
    'Safe & Verified Captains',
    'Real-time Trip Tracking',
    'Transparent Fare Estimation',
    'Advanced Dispatch System'
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="relative max-w-[400px] lg:max-w-none mx-auto w-full">
            <div className="relative z-10 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
               <div className="bg-yellow-400 aspect-[4/5] flex items-center justify-center p-8 sm:p-12">
                  <div className="text-center">
                    <img src={logoSrc} alt="Hamara Taxi About Logo" className="w-32 h-auto mx-auto mb-6 sm:mb-8 animate-float drop-shadow-xl" />
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">HAMARA TAXI</h4>
                    <p className="text-slate-800 font-bold uppercase tracking-widest text-xs sm:text-sm">Begusarai</p>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl z-20 max-w-[180px] sm:max-w-[240px]">
              <div className="text-3xl sm:text-4xl font-black text-yellow-400 mb-2">100%</div>
              <div className="font-bold text-base sm:text-lg mb-1 leading-tight">Reliability Rate</div>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Safar Bharose Ka</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-yellow-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">About the Company</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              A Unit of Tour T.T.S Raj Pvt. Ltd.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Hamara Taxi - Begusarai is a structured transport and mobility company operating with a professional team of 18 members. We are dedicated to providing safe, affordable, and reliable transportation services across the region.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-lg text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-lg sm:text-xl font-bold overflow-hidden">
                   <img src={logoSrc} alt="CEO" className="w-full h-auto" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">Shubham Kumar</div>
                  <div className="text-xs sm:text-sm text-slate-500">CEO & Founder</div>
                </div>
              </div>
              <p className="text-slate-600 italic text-sm sm:text-base">
                "Our mission is to revolutionize transport in Begusarai by building a service that people can trust blindly. Every ride with us is a promise of safety and comfort."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const categories = [
    {
      title: 'Top Management & Leadership',
      members: [
        { name: 'Rajeev Kumar', role: 'Managing Director', image: `${import.meta.env.BASE_URL}Director.jpeg` },
        { name: 'Shubham Kumar', role: 'CEO / Founder' },
        { name: 'Divesh Kumar', role: 'HR & Operation Director' }
      ]
    },
    {
      title: 'Operations & Fleet Coordination',
      members: [
        { name: 'Anchit Raj', role: 'Technical Product Lead' },
        { name: 'Dispatch / Trip Coordinator', role: 'Operations' },
        { name: 'Fleet Supervisor', role: 'Operations' }
      ]
    },
    {
      title: 'Booking & Customer Support',
      members: [
        { name: 'Aman Raj', role: 'Booking Manager' },
        { name: 'Rohit Kumar', role: 'Booking Executive' },
        { name: 'Aditya Kumar', role: 'Customer Support Executive' }
      ]
    },
    {
      title: 'Field Captains & Drivers',
      members: [
        { name: 'Ravi Kumar', role: 'Driver Captain' },
        { name: 'Pankaj Kumar', role: 'Commercial Driver' },
        { name: 'Mukesh Kumar', role: 'Commercial Driver' },
        { name: 'Santosh Kumar', role: 'Traveller Driver' },
        { name: 'Deepak Kumar', role: 'Traveller Driver' }
      ]
    },
    {
      title: 'Administration & Finance',
      members: [
        { name: 'Abhishek Kumar', role: 'Accountant / Billing' },
        { name: 'Admin & Documentation', role: 'Administrative Staff' }
      ]
    },
    {
      title: 'Digital Marketing & Branding',
      members: [
        { name: 'Vikash Kumar', role: 'Digital Marketing Executive' },
        { name: 'Prakash Kumar', role: 'Graphic Designer / Branding' }
      ]
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-yellow-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Our Professional Team</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">The People Behind Your Journey</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            A structured active workforce of 18 team members dedicated to excellence.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 sm:mb-8 pb-2 border-b-2 border-yellow-400 inline-block">
                {category.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.members.map((member) => (
                  <div key={member.name} className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-sm sm:text-base">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="font-bold text-slate-500">{member.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm sm:text-base">{member.name}</div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-taxi-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-yellow-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Ready to travel? <br className="hidden sm:block" />
              Let's get you there.
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mb-10 sm:mb-12 max-w-md mx-auto lg:mx-0">
              Available 24/7 for bookings, queries, and support. Connect with us via any of these channels.
            </p>

            <div className="space-y-6 sm:space-y-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-4 sm:gap-6 text-left">
                <div className="bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-1">Call Us</div>
                  <a href="tel:8709570320" className="text-xl sm:text-2xl font-bold hover:text-yellow-400 transition-colors">
                    +91 87095 70320
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 text-left">
                <div className="bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-1">Email Us</div>
                  <a href="mailto:hamarataxi@gmail.com" className="text-lg sm:text-2xl font-bold hover:text-yellow-400 transition-colors break-all">
                    hamarataxi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 text-left">
                <div className="bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-1">Visit Us</div>
                  <div className="text-xl sm:text-2xl font-bold">
                    Begusarai, Bihar
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 flex justify-center lg:justify-start gap-4 sm:gap-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-800 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-lg active:scale-95">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
            <h4 className="text-slate-900 text-xl sm:text-2xl font-extrabold mb-8 text-center">Send us a Message</h4>
            <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-xs sm:text-sm">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-xs sm:text-sm">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-xs sm:text-sm">Select Service</label>
                <select className="w-full bg-slate-50 border border-slate-200 px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm">
                  <option>Daily Taxi</option>
                  <option>Traveller Service</option>
                  <option>Outstation Tour</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-xs sm:text-sm">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm"
                  placeholder="Tell us about your trip..."
                />
              </div>
              <button className="w-full bg-yellow-400 text-slate-900 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:-translate-y-1 active:translate-y-0 transition-all active:scale-[0.98]">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 sm:py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
            <div>
              <span className="text-base sm:text-lg font-bold text-white block leading-tight">HAMARA TAXI</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Begusarai</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-slate-800 transition-all active:scale-95">
              <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500">Download on</span>
                <span className="text-xs sm:text-sm font-bold text-white">Google Play</span>
              </div>
            </a>
            <div className="text-[11px] sm:text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Hamara Taxi - Begusarai. All rights reserved.</p>
              <p className="mt-1 font-semibold text-slate-500 uppercase tracking-tighter text-[9px] sm:text-xs">A Unit of Tour T.T.S Raj Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
