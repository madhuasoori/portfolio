import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ title, description, github, tags, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative"
        >
            <div className="glass p-8 rounded-3xl neon-border h-full flex flex-col transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:border-secondary/50">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                        <Code2 size={24} />
                    </div>
                    <div className="flex gap-4">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                title="View Code"
                            >
                                <Github size={22} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors leading-tight">
                    {title}
                </h3>

                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-dark-secondary/50 text-slate-300 text-xs font-medium rounded-full border border-slate-800"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-secondary/5 to-primary/5 -z-10" />
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Stock Price Prediction',
            description: 'A sophisticated machine learning model designed to predict stock market trends. Leveraging Python, Pandas, and LSTM networks to achieve a high accuracy of 96% in time-series forecasting.',
            tags: ['Python', 'LSTM', 'Pandas', 'Machine Learning'],
            github: 'https://github.com/madhuasoori/Stock-Price-Prediction'
        },
        {
            title: 'Student Management System',
            description: 'A comprehensive attendance and scheduling system designed for educational institutions. Featuring a robust backend with Spring Boot and PostgreSQL, and a reactive frontend using React.js.',
            tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'REST API'],
            github: 'https://github.com/madhuasoori/Student-Management-System'
        },
        {
            title: 'Library Management System',
            description: 'A full-stack library ecosystem for managing book inventories, user accounts, and borrowing transactions. Features automated issue/return tracking and deep database integration.',
            tags: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
            github: 'https://github.com/madhuasoori/Library-management-system'
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work in full-stack development and machine learning.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
