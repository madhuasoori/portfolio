import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Rocket, Brain } from 'lucide-react';

const About = () => {
    const highlights = [
       
        {
            icon: <Code className="text-secondary" size={24} />,
            title: 'Full Stack Developer',
            description: 'Building scalable web applications with modern tech stacks.'
        },
        {
            icon: <Rocket className="text-accent" size={24} />,
            title: 'Problem Solver',
            description: 'Strong analytical skills and passion for teamwork.'
        },
         {
            icon: <Brain className="text-primary" size={24} />,
            title: 'ML Enthusiast',
            description: 'Passionate about exploring and building AI/ML solutions.'
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-primary">I'm Madhulika Asoori</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I am a fourth-year B.Tech IT student at BVRIT, passionate about building scalable web applications and innovative machine learning solutions.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            My journey in tech is driven by a strong desire to solve real-world problems through code and data. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span>Strong in teamwork & communication</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span>Passionate about Scalable Web Apps</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span>Strong problem solving & analytical skills</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="glass p-6 rounded-2xl border-l-4 border-primary/50 hover:border-primary transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-darkSecondary rounded-xl group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
