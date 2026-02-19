import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background animated gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Side: Profile Image */}
                    <motion.div
                        className="flex-1 flex justify-center md:justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-[3/4] w-64 md:w-80 overflow-hidden rounded-2xl border border-white/10 glass">
                                <img
                                    src="/profile.jpeg"
                                    alt="Madhulika Asoori"
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
                            Hi, I'm Madhulika Asoori
                        </h2>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 min-h-[1.2em]">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Full Stack Developer',
                                        'IT Student',
                                        'ML Enthusiast'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                            Passionate about building scalable web applications and innovative machine learning solutions.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-12">
                            <motion.a
                                href="/Madhulika Asoori Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/30 transition-shadow flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} />
                                Download Resume
                            </motion.a>

                            <div className="flex items-center gap-4">
                                <motion.a
                                    href="https://github.com/madhuasoori"
                                    target="_blank"
                                    className="p-3 glass rounded-full text-slate-300 hover:text-primary transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    <Github size={24} />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/madhulika-asoori-1693a0259"
                                    target="_blank"
                                    className="p-3 glass rounded-full text-slate-300 hover:text-secondary transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    <Linkedin size={24} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20"
                >
                    <a href="#about" className="text-slate-500 hover:text-primary transition-colors">
                        <ArrowDown size={32} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
