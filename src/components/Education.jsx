import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationItem = ({ title, institution, duration, score, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-800"
        >
            {/* Icon/Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] border-2 border-slate-950" />

            <div className="glass p-6 md:p-8 rounded-3xl neon-border hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">{title}</h3>
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 flex items-center gap-2 w-fit">
                        <Calendar size={14} />
                        {duration}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                        <GraduationCap size={18} className="text-secondary" />
                        {institution}
                    </div>
                    {score && (
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="text-accent font-bold">
                                {score.includes('%') ? 'Percentage' : 'GPA'}: {score}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    const educationData = [
        {
            title: 'B.Tech Information Technology',
            institution: 'BVRIT (B.V. Raju Institute of Technology)',
            duration: '2022 – 2026',
            score: '8.02'
        },
        {
            title: 'Intermediate',
            institution: 'Sri Chaitanya Junior Kalasala',
            duration: '2020 – 2022',
            score: '87%'
        }
    ];

    return (
        <section id="education" className="py-24 bg-darkSecondary/20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education Journey</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-4">
                    {educationData.map((item, index) => (
                        <EducationItem key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
