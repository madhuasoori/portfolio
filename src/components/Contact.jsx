import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactInfo = ({ icon, label, value, href }) => (
    <motion.a
        href={href}
        whileHover={{ x: 5 }}
        className="flex items-center gap-4 p-4 pl-10 glass rounded-2xl border border-slate-800 hover:border-primary/40 transition-all group"
    >
        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
            {icon}
        </div>
        <div>
            <p className="text-slate-400 text-sm font-medium">{label}</p>
            <p className="text-white font-semibold">{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING');

        try {
            const response = await fetch('https://formspree.io/f/xjgeoqey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('IDLE'), 5000);
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out to me!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold pl-10 text-white mb-8">Contact Information</h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <ContactInfo
                                icon={<Mail size={22} />}
                                label="Email"
                                value="madhulikaasoori@gmail.com"
                                href="mailto:madhulikaasoori@gmail.com"
                            />
                            <ContactInfo
                                icon={<Phone size={22} />}
                                label="Phone"
                                value="+91 8341135299"
                                href="tel:+918341135299"
                            />
                            <ContactInfo
                                icon={<MapPin size={22} />}
                                label="Location"
                                value="Hyderabad, India"
                                href="#"
                            />
                            <ContactInfo
                                icon={<MessageSquare size={22} />}
                                label="GitHub"
                                value="madhuasoori"
                                href="https://github.com/madhuasoori"
                            />
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 rounded-3xl neon-border"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-300 text-sm font-medium ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-300 text-sm font-medium ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-slate-300 text-sm font-medium ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'SENDING'}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'SENDING' ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === 'SUCCESS' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-emerald-400 justify-center font-medium"
                                >
                                    <CheckCircle2 size={18} />
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {status === 'ERROR' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-rose-400 justify-center font-medium"
                                >
                                    <AlertCircle size={18} />
                                    Failed to send message. Please try again.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
