import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
        { label: 'GitHub', href: 'https://github.com/OshadaX' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Email', href: 'mailto:hello@oshadanavindra.com' },
    ];

    return (
        <section id="contact" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc]">
            <div className="max-w-[1400px] mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-[10vw] md:text-[6vw] font-serif font-medium text-black leading-none mb-4">
                        05 — Contact
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-24">
                    {/* Left Col: Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-16"
                    >
                        <div>
                            <h3 className="text-4xl md:text-5xl font-serif font-medium text-black mb-6 leading-tight">
                                Let's build<br />something new.
                            </h3>
                            <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-sm">
                                Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">SOCIAL & CONTACT</span>
                            <div className="flex flex-col items-start gap-4">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center text-xl font-sans text-gray-800 overflow-hidden py-1"
                                    >
                                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                                            {social.label}
                                        </span>
                                        <ArrowUpRight size={20} strokeWidth={1.5} className="ml-3 text-black/20 group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Col: Minimal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group pt-6">
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-serif text-black focus:outline-none transition-colors peer placeholder-transparent"
                                        placeholder="Name"
                                    />
                                    <label htmlFor="name" className="absolute left-0 top-10 text-2xl font-serif text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:top-0 peer-valid:text-[10px] peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-black pointer-events-none">
                                        Name
                                    </label>
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                                <div className="relative group pt-6">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-serif text-black focus:outline-none transition-colors peer placeholder-transparent"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="email" className="absolute left-0 top-10 text-2xl font-serif text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:top-0 peer-valid:text-[10px] peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-black pointer-events-none">
                                        Email
                                    </label>
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                            </div>

                            <div className="relative group pt-6">
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={1}
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-serif text-black focus:outline-none transition-colors resize-none overflow-hidden peer placeholder-transparent"
                                    placeholder="Message"
                                    style={{ height: 'auto', minHeight: '60px' }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = `${target.scrollHeight}px`;
                                    }}
                                />
                                <label htmlFor="message" className="absolute left-0 top-10 text-2xl font-serif text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:top-0 peer-valid:text-[10px] peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-black pointer-events-none">
                                    Message
                                </label>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className="group relative inline-flex items-center justify-center gap-4 w-full md:w-auto px-10 py-5 bg-black text-white rounded-full font-sans text-lg md:text-xl font-medium overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                    <span className="relative z-10">
                                        {status === 'idle' && 'Send Inquiry'}
                                        {status === 'sending' && 'Sending...'}
                                        {status === 'sent' && 'Sent Successfully'}
                                    </span>
                                    <motion.div
                                        className="relative z-10 flex items-center justify-center"
                                        animate={{ rotate: status === 'sent' ? 360 : 0, scale: status === 'sending' ? 0.8 : 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </motion.div>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Style Credits */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-32 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        © 2026 Digital Playground
                    </div>
                    <div className="flex gap-12 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        <span>Sri Lanka — 10:35 AM</span>
                        <span>Design & Development</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

