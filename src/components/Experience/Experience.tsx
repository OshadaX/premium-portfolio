import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Award, Target, Zap } from 'lucide-react';

interface Job {
    year: string;
    title: string;
    company: string;
    duration: string;
    progress: number;
    role: string;
    achievements: string[];
    stack: string[];
    impact: string;
}

const Experience = () => {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);

    const timeline: Job[] = [
        {
            year: '2019',
            title: 'EDUCATION_MODULE',
            company: 'University',
            duration: '4y 0m',
            progress: 10,
            role: 'Computer Science Degree',
            achievements: [
                '→ Graduated with honors (GPA 3.8/4.0)',
                '→ Led hackathon team to 1st place',
                '→ Published research paper on AI',
            ],
            stack: ['Python', 'Java', 'C++', 'Algorithms'],
            impact: 'Foundation built',
        },
        {
            year: '2020',
            title: 'JUNIOR_DEV.process',
            company: 'Tech Startup A',
            duration: '1y 6m',
            progress: 25,
            role: 'Frontend Developer',
            achievements: [
                '→ Built responsive UI for 50K+ users',
                '→ Reduced page load time by 40%',
                '→ Implemented design system',
            ],
            stack: ['React', 'TypeScript', 'CSS3', 'Git'],
            impact: '50K+ users',
        },
        // {
        //     year: '2022',
        //     title: 'MID_LEVEL.role',
        //     company: 'Software Company B',
        //     duration: '2y 0m',
        //     progress: 50,
        //     role: 'Full Stack Engineer',
        //     achievements: [
        //         '→ Architected microservices backend',
        //         '→ Led team of 3 junior developers',
        //         '→ Reduced infrastructure costs by 30%',
        //     ],
        //     stack: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
        //     impact: '200K+ users',
        // },
        // {
        //     year: '2024',
        //     title: 'SENIOR_DEV.init()',
        //     company: 'Enterprise Corp C',
        //     duration: '1y 0m',
        //     progress: 75,
        //     role: 'Senior Engineer',
        //     achievements: [
        //         '→ Led team of 5 engineers',
        //         '→ Reduced load time by 60%',
        //         '→ Deployed 15+ major features',
        //     ],
        //     stack: ['React', 'AWS', 'PostgreSQL', 'Redis'],
        //     impact: '10M+ users served',
        // },
        // {
        //     year: '2025',
        //     title: 'LEAD_ENGINEER.exe',
        //     company: 'Current Position',
        //     duration: 'Present',
        //     progress: 90,
        //     role: 'Tech Lead',
        //     achievements: [
        //         '→ Leading engineering team of 10+',
        //         '→ Architecting scalable systems',
        //         '→ Mentoring junior developers',
        //     ],
        //     stack: ['All Stack', 'Architecture', 'Leadership', 'DevOps'],
        //     impact: 'Millions impacted',
        // },
    ];

    const achievements = [
        { icon: Trophy, label: 'FIRST_DEPLOYMENT', color: '#fbbf24' },
        { icon: Award, label: 'TEAM_LEADER', color: '#22c55e' },
        { icon: Target, label: '10K_USERS_SERVED', color: '#3b82f6' },
        { icon: Zap, label: 'ZERO_DOWNTIME_YEAR', color: '#a855f7' },
    ];

    return (
        <section id="experience" className="relative min-h-screen bg-black py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-green-900/20 font-mono text-xs"
                        initial={{ y: -20, x: Math.random() * window.innerWidth }}
                        animate={{ y: window.innerHeight + 20 }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        {Math.random() > 0.5 ? '0' : '1'}
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-green-500 font-mono text-sm mb-4 tracking-[0.3em]">
                        [ LOADING_CAREER_TRAJECTORY ]
                    </h2>
                    <div className="text-green-700 font-mono text-xs">
                        {'>'} BOOT Initializing career_path.exe...
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500/30" />

                            {timeline.map((job, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-20 pb-12 last:pb-0"
                                >
                                    <motion.div
                                        className="absolute left-6 w-4 h-4 rounded-full border-2 border-green-500 bg-black"
                                        whileHover={{ scale: 1.5 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-green-500"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </motion.div>

                                    <div className="font-mono">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="text-green-700 text-xs">[{job.year}]</div>
                                            <div className="flex-1 h-3 bg-green-950/30 border border-green-500/30 relative overflow-hidden">
                                                <motion.div
                                                    className="absolute inset-y-0 left-0 bg-green-500"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${job.progress}%` }}
                                                    transition={{ delay: idx * 0.1 + 0.3, duration: 1 }}
                                                    style={{
                                                        boxShadow: '0 0 10px #22c55e',
                                                    }}
                                                />
                                            </div>
                                            <div className="text-green-500 text-xs">{job.title}</div>
                                        </div>

                                        <div
                                            className="border-2 border-green-500/30 bg-black p-4 cursor-pointer hover:border-green-500 transition-colors"
                                            onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-green-500 text-lg">
                                                    {job.company}
                                                </h3>
                                                <span className="text-green-700 text-xs">{job.duration}</span>
                                            </div>

                                            <div className="text-green-600 text-sm mb-3">{job.role}</div>

                                            {expandedJob === idx && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="space-y-4 mt-4 pt-4 border-t border-green-500/20"
                                                >
                                                    <div>
                                                        <div className="text-green-700 text-xs mb-2">
                                                            function WorkAt_{job.company.replace(/\s/g, '')}() {'{'}
                                                        </div>
                                                        <div className="pl-4 space-y-1 text-green-600 text-xs">
                                                            {job.achievements.map((achievement, i) => (
                                                                <div key={i}>{achievement}</div>
                                                            ))}
                                                        </div>
                                                        <div className="text-green-700 text-xs mt-2">{'}'}</div>
                                                    </div>

                                                    <div>
                                                        <div className="text-green-700 text-xs mb-2">
                                                            SKILLS_ACQUIRED:
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {job.stack.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-2 py-1 border border-green-500/30 text-green-500 text-[10px]"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="text-green-600 text-xs">
                                                        IMPACT: {job.impact}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="pl-20 text-green-500 font-mono text-xs"
                            >
                                [SYSTEM] All modules loaded successfully ✓
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="border-2 border-green-500/30 bg-black p-6 font-mono sticky top-24"
                        >
                            <div className="text-green-500 text-sm mb-6 text-center">
                                ╔═══ ACHIEVEMENTS_UNLOCKED ═══╗
                            </div>

                            <div className="space-y-4">
                                {achievements.map((achievement, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="border border-green-500/30 p-4 hover:border-green-500 transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <achievement.icon
                                                size={24}
                                                style={{ color: achievement.color }}
                                                className="group-hover:drop-shadow-[0_0_8px_currentColor]"
                                            />
                                            <span className="text-green-500 text-xs tracking-wider">
                                                {achievement.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-green-500 text-sm mt-6 text-center">
                                ╚═════════════════════════════╝
                            </div>

                            <div className="mt-8 pt-6 border-t border-green-500/20 space-y-3 text-xs">
                                <div className="flex justify-between text-green-600">
                                    <span>TOTAL_EXPERIENCE</span>
                                    <span className="text-green-500">5+ YEARS</span>
                                </div>
                                <div className="flex justify-between text-green-600">
                                    <span>COMPANIES</span>
                                    <span className="text-green-500">4</span>
                                </div>
                                <div className="flex justify-between text-green-600">
                                    <span>PROJECTS_LED</span>
                                    <span className="text-green-500">20+</span>
                                </div>
                                <div className="flex justify-between text-green-600">
                                    <span>TEAM_SIZE</span>
                                    <span className="text-green-500">10+ MEMBERS</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
