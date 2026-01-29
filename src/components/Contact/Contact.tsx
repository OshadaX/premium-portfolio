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
        <section id="contact" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
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
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-3xl font-serif font-medium text-black mb-6">
                                Let's build<br />something new.
                            </h3>
                            <p className="text-lg text-black/60 font-sans leading-relaxed max-w-xs">
                                Have a project in mind or just want to say hi? Feel free to reach out.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">Connection</span>
                            <div className="flex flex-col items-start gap-4">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center text-lg font-sans text-black overflow-hidden"
                                    >
                                        <span className="relative z-10 group-hover:text-gray-500 transition-colors duration-300">
                                            {social.label}
                                        </span>
                                        <ArrowUpRight size={18} className="ml-2 text-black/20 group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
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
                    >
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-serif italic text-black focus:border-black focus:outline-none transition-colors"
                                        placeholder="Oshada Navindra"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-serif italic text-black focus:border-black focus:outline-none transition-colors"
                                        placeholder="hello@world.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={1}
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-serif italic text-black focus:border-black focus:outline-none transition-colors resize-none overflow-hidden"
                                    placeholder="Tell me about your project..."
                                    style={{ height: 'auto', minHeight: '60px' }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = `${target.scrollHeight}px`;
                                    }}
                                />
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className="group relative inline-flex items-center gap-4 text-3xl md:text-5xl font-serif text-black hover:text-gray-400 transition-colors duration-500 disabled:opacity-50"
                                >
                                    <span>
                                        {status === 'idle' && 'Send Inquiry'}
                                        {status === 'sending' && 'Sending...'}
                                        {status === 'sent' && 'Sent.'}
                                    </span>
                                    <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 group-hover:border-black/40 transition-colors duration-500">
                                        <ArrowUpRight size={24} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>
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
                    className="mt-40 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8"
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

