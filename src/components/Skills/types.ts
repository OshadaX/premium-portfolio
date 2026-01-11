export interface Node {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'tools';
    proficiency: number; // 0 to 1
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    description: string;
}

export interface Link {
    source: string;
    target: string;
    strength: number;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface GraphData {
    nodes: Node[];
    links: Link[];
}
