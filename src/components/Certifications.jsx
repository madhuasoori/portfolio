import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Star } from 'lucide-react';

const CertificationCard = ({ title, issuer, file, index }) => {
    const isExternal = file.startsWith('http');
    return (
        <motion.a
            href={isExternal ? file : `/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl border border-slate-800 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all group flex items-center h-full min-h-[100px]"
        >
            <div className="flex items-center gap-4 w-full">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                    <Award size={24} />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-tight mb-1">{title}</h4>
                    <p className="text-slate-400 text-sm font-medium">{issuer}</p>
                </div>
                <Star size={16} className="text-slate-600 group-hover:text-accent transition-colors flex-shrink-0" />
            </div>
        </motion.a>
    );
};

const Certifications = () => {
    const certs = [
        { title: 'Data Structures & Algorithms', issuer: 'Smart Interviews', file: 'https://smartinterviews.in/certificate/92a3922e' },
        { title: 'Problem Solving (Basic)', issuer: 'HackerRank', file: 'problem_solving_certif_Hackerrank.pdf' },
        { title: 'Java Programming', issuer: 'HackerRank', file: 'java_basic certif_Hackerrank.pdf' },
        { title: 'Python Programming', issuer: 'Udemy', file: 'Python - Udemy certif.pdf' },
        { title: 'AWS Cloud Fundamentals', issuer: 'AWS Training', file: 'aws_certif.pdf' },
        { title: 'Java Spring Boot', issuer: 'Udemy', file: 'Java springboot - Udemy certif.pdf' },
        { title: 'Git & GitHub', issuer: 'Udemy', file: 'GIT-udemy certif.pdf' },
        { title: 'Summer of AI Internship', issuer: 'Swecha', file: 'swecha.pdf' }
    ];

    return (
        <section id="certifications" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:block"
                    >
                        <p className="text-slate-400 max-w-md text-right">
                            Continuous learning and professional growth through specialized certifications and internships.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <CertificationCard key={index} {...cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
