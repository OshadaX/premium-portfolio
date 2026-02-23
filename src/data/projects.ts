import frontendProject1 from '../assets/frontend-project-1.png';
import nexzop1 from '../assets/nexzop-1.png';
import nexzop2 from '../assets/nexzop-2.png';
import nexzop3 from '../assets/nexzop-3.png';
import nexzop4 from '../assets/nexzop-4.png';

export interface Project {
    title: string;
    description: string;
    tech: string;
    image: string;
    link: string;
    category: 'frontend' | 'devops';
    featured: boolean;
    fullDescription: string;
    liveUrl?: string;
    githubUrl?: string;
    features?: string[];
    gallery?: string[];
}

export const projects: Project[] = [
    {
        title: 'Nexzop',
        description: 'Comprehensive HR management system for software companies.',
        tech: 'React · Node.js',
        image: frontendProject1,
        link: '#',
        category: 'frontend',
        featured: true,
        fullDescription: 'We rebuilt the entire HR management workflow from the ground up for software companies, focusing on performance, automation, and user experience. By streamlining employee management, leave tracking, and approval flows, we reduced manual workload and achieved a 45% improvement in operational efficiency.',
        liveUrl: '#',
        githubUrl: '#',
        features: [
            'Employee Management System',
            'Attendance & Time Tracking',
            'Leave Management & Approval Workflow',
            'HR Analytics Dashboard'
        ],
        gallery: [
            nexzop1,
            nexzop2,
            nexzop3,
            nexzop4
        ]
    },
    {
        title: 'Cloud Scale Infra',
        description: 'Automated scalable infrastructure using Kubernetes.',
        tech: 'Kubernetes · AWS',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
        link: '#',
        category: 'devops',
        featured: true,
        fullDescription: 'Designing a self-healing infrastructure that scales automatically based on traffic patterns. Reduced downtime by 99.9%.',
        liveUrl: '#',
        githubUrl: '#',
        features: [
            'Auto-scaling Kubernetes Clusters',
            'Infrastructure as Code (IaC)',
            'Automated Disaster Recovery',
            'Real-time Monitoring & Alerts'
        ],
        gallery: [
            'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
            'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
        ]
    },
    {
        title: 'Neural Analytics',
        description: 'Real-time data processing engine with immersive 3D visualizations.',
        tech: 'Three.js · D3.js',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
        link: '#',
        category: 'frontend',
        featured: false,
        fullDescription: 'Visualizing complex neural network data in real-time. The 3D interface allows analysts to explore data relationships intuitively.',
        liveUrl: '#',
        githubUrl: '#',
        features: [
            'Interactive 3D Data Visualization',
            'Real-time Data Streaming',
            'Complex Network Analysis',
            'Customizable Dashboards'
        ],
        gallery: [
            'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
            'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg'
        ]
    },
    {
        title: 'CI/CD Pipeline',
        description: 'Optimized deployment workflows reducing build times by 60%.',
        tech: 'GitHub Actions',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
        link: '#',
        category: 'devops',
        featured: false,
        fullDescription: 'A custom CI/CD pipeline built to handle microservices deployment. Includes automated testing, security scanning, and canary deployments.',
        liveUrl: '#',
        githubUrl: '#',
        features: [
            'Automated Testing Integration',
            'Security Vulnerability Scanning',
            'Canary Deployment Strategy',
            'Rollback Capabilities'
        ],
        gallery: [
            'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
        ]
    },
    {
        title: 'Aether Wallet',
        description: 'Next generation digital asset management.',
        tech: 'Web3 · Solidity',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
        link: '#',
        category: 'frontend',
        featured: false,
        fullDescription: 'Secure, non-custodial wallet for managing digital assets. Features bio-metric authentication and multi-chain support.',
        liveUrl: '#',
        githubUrl: '#',
        features: [
            'Multi-chain Asset Support',
            'Biometric Authentication',
            'Non-custodial Security',
            'dApp Browser Integration'
        ],
        gallery: [
            'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg'
        ]
    },
    {
        title: 'Microservices Mesh',
        description: 'Service mesh implementation for inter-service communication.',
        tech: 'Istio · Go',
        image: 'https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg',
        link: '#',
        category: 'devops',
        featured: false,
        fullDescription: 'Implementation of Istio service mesh to secure, connect, and monitor services. Provides advanced traffic management capabilities.',
        liveUrl: '#',
        githubUrl: '#',
        features: [
            'Traffic Management & Routing',
            'Service-to-Service Security',
            'Observability & Tracing',
            'Fault Injection Testing'
        ],
        gallery: [
            'https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg'
        ]
    }
];
