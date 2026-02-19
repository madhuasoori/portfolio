import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SkillItem = ({ name }) => (
    <motion.div
        className="flex items-center gap-3 text-slate-300 group hover:text-primary transition-colors py-1"
        whileHover={{ x: 5 }}
    >
        <CheckCircle2 size={18} className="text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
        <span className="text-base font-medium">{name}</span>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Java', 'Python', 'SQL']
        },
        {
            title: 'Development Skills',
            skills: ['HTML', 'CSS / Tailwind CSS', 'JavaScript', 'React.js', 'Spring Boot', 'REST APIs']
        },
        {
            title: 'Databases & Tools',
            skills: ['MySQL', 'PostgreSQL', 'Git & GitHub', 'VS Code', 'Postman', 'Docker']
        },
        {
            title: 'Computer Science',
            skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Agile Methodology', 'Cloud Computing']
        },
        {
            title: 'Other Skills',
            skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability']
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of my technical expertise and soft skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-secondary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-1 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillItem key={skillIndex} name={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
