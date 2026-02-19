import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-darkSecondary bg-darkSecondary/90 mt-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                            Madhulika
                        </h3>
                        <p className="text-slate-400 text-sm">
                            IT Student | Full Stack Developer | ML Enthusiast
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/madhuasoori" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/madhulika-asoori-1693a0259" target="_blank" className="text-slate-400 hover:text-secondary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:madhulikaasoori@gmail.com" className="text-slate-400 hover:text-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="text-slate-400 text-sm text-center md:text-right">
                        <p>© {currentYear} Madhulika Asoori. All rights reserved.</p>
                        <p className="mt-1 flex items-center justify-center md:justify-end gap-1">
                            Made with <Heart size={14} className="text-primary fill-primary" /> using React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
