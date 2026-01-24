import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        }, 2000);
    };

    const socials = [
        { icon: Github, label: 'GitHub', href: 'https://github.com' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
        { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
        { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
    ];

    return (
        <section id="contact" className="relative min-h-screen bg-premium-dark py-32 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Left Side: Large Text & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-16"
                    >
                        <div>
                            <span className="text-premium-accent font-sans text-xs tracking-[0.4em] uppercase mb-4 block">
                                04 — Contact
                            </span>
                            <h2 className="text-6xl md:text-8xl font-serif text-white leading-tight italic">
                                Let's create <br />
                                <span className="text-premium-accent font-sans font-black not-italic uppercase tracking-tighter">
                                    together
                                </span>
                            </h2>
                            <p className="mt-8 text-premium-gray-400 font-sans text-xl leading-relaxed max-w-md">
                                Have a vision you'd like to bring to life? I'm always open to discussing new projects and creative opportunities.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-white font-sans text-xs font-black uppercase tracking-widest border-b border-premium-gray-800 pb-2 inline-block">Social Connection</h4>
                            <div className="grid grid-cols-2 gap-6 max-w-sm">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between p-4 border border-premium-gray-800 hover:border-premium-accent transition-all duration-500"
                                    >
                                        <span className="text-premium-gray-400 group-hover:text-white font-sans text-xs tracking-widest uppercase transition-colors">
                                            {social.label}
                                        </span>
                                        <ArrowUpRight size={16} className="text-premium-gray-600 group-hover:text-premium-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: High-End Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-premium-gray-900 border border-premium-gray-800 p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="relative">
                                <label className="text-premium-gray-500 font-sans text-[10px] uppercase tracking-[0.2em] mb-4 block">Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full bg-transparent border-b border-premium-gray-800 text-white font-serif italic text-2xl py-2 focus:border-premium-accent focus:outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-premium-gray-500 font-sans text-[10px] uppercase tracking-[0.2em] mb-4 block">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full bg-transparent border-b border-premium-gray-800 text-white font-serif italic text-2xl py-2 focus:border-premium-accent focus:outline-none transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-premium-gray-500 font-sans text-[10px] uppercase tracking-[0.2em] mb-4 block">Your Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-premium-gray-800 text-white font-serif italic text-2xl py-2 focus:border-premium-accent focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="w-full group py-6 border border-premium-accent text-premium-accent font-sans font-black uppercase tracking-widest hover:bg-premium-accent hover:text-premium-dark transition-all duration-500 disabled:opacity-50"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    {status === 'idle' && 'Send Message'}
                                    {status === 'sending' && 'Transmitting...'}
                                    {status === 'sent' && 'Message Delivered'}
                                    <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-40 pt-12 border-t border-premium-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-premium-gray-600 font-sans text-[10px] tracking-widest uppercase italic">
                        © 2025 Oshada Navindra
                    </div>
                    <div className="flex gap-12 text-premium-gray-600 font-sans text-[10px] tracking-widest uppercase">
                        <span>Digital Craftsman</span>
                        <span>Available for Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

