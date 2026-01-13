import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
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
        { icon: Github, label: 'GitHub', href: 'https://github.com', color: '#22c55e' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#3b82f6' },
        { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: '#00d9ff' },
        { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', color: '#f97316' },
    ];

    return (
        <section id="contact" className="relative min-h-screen bg-black py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-green-500 font-mono text-sm mb-4 tracking-[0.3em]">
                        [ ESTABLISH_CONNECTION ]
                    </h2>
                    <div className="text-green-700 font-mono text-xs">
                        {'>'} INITIATING COMMUNICATION PROTOCOL...
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="border-2 border-green-500/30 bg-black p-8 font-mono">
                            <div className="text-green-700 text-xs mb-6">
                                $ cat contact_info.txt
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-green-500 text-2xl mb-2">
                                        LET'S BUILD SOMETHING AMAZING
                                    </div>
                                    <p className="text-green-700 text-sm leading-relaxed">
                                        Available for freelance projects, collaborations, or just a chat about technology.
                                        Feel free to reach out through any channel below.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-green-600 text-sm">
                                    <MapPin size={18} className="text-green-500" />
                                    <span>Remote / Global</span>
                                </div>

                                <div className="pt-6 border-t border-green-500/20">
                                    <div className="text-green-700 text-xs mb-4">
                                        [SOCIAL_NETWORKS]
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {socials.map((social, idx) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-3 border border-green-500/30 p-4 hover:border-green-500 transition-colors group"
                                            >
                                                <social.icon
                                                    size={20}
                                                    style={{ color: social.color }}
                                                    className="group-hover:drop-shadow-[0_0_8px_currentColor] transition-all"
                                                />
                                                <span className="text-green-500 text-xs">
                                                    {social.label}
                                                </span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="border border-green-500/30 bg-green-500/5 p-6 font-mono text-xs"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-green-500">STATUS: ONLINE</span>
                            </div>
                            <div className="text-green-700 space-y-1">
                                <div>→ Response time: {'<'} 24 hours</div>
                                <div>→ Availability: Full-time</div>
                                <div>→ Preferred contact: Email</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="border-2 border-green-500/30 bg-black p-8 font-mono">
                            <div className="border-b border-green-500/20 pb-4 mb-6 flex items-center justify-between">
                                <div className="text-green-500 text-xs">MESSAGE_TERMINAL_v1.0</div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="text-green-700 text-xs mb-2 block">
                                        $ echo "SENDER_NAME"
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-black border border-green-500/30 text-green-500 px-4 py-3 focus:border-green-500 focus:outline-none transition-colors text-sm"
                                        placeholder="John_Doe"
                                    />
                                </div>

                                <div>
                                    <label className="text-green-700 text-xs mb-2 block">
                                        $ echo "SENDER_EMAIL"
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-black border border-green-500/30 text-green-500 px-4 py-3 focus:border-green-500 focus:outline-none transition-colors text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="text-green-700 text-xs mb-2 block">
                                        $ cat message.txt
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={6}
                                        className="w-full bg-black border border-green-500/30 text-green-500 px-4 py-3 focus:border-green-500 focus:outline-none transition-colors text-sm resize-none"
                                        placeholder="Type your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className="w-full px-8 py-4 bg-green-500 text-black font-bold text-sm tracking-wider hover:bg-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'idle' && '[ TRANSMIT_MESSAGE ]'}
                                    {status === 'sending' && (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            SENDING...
                                        </>
                                    )}
                                    {status === 'sent' && '✓ MESSAGE_SENT'}
                                </button>

                                {status === 'sent' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-500 text-xs text-center"
                                    >
                                        [SUCCESS] Your message has been transmitted successfully.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 max-w-7xl mx-auto mt-20 text-center"
            >
                <div className="border-t border-green-500/20 pt-8">
                    <p className="text-green-700 font-mono text-xs">
                        © 2025 NAVINDRA_OSHADA | ALL_RIGHTS_RESERVED
                    </p>
                    <p className="text-green-900 font-mono text-[10px] mt-2">
                        BUILT_WITH: React + TypeScript + Three.js + Framer Motion
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
