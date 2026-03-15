export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  price: number;
  originalPrice: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonCount: number;
  description: string;
  lastUpdated: string;
  language: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  courseCount: number;
  studentCount: number;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  course: string;
  text: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courseCount: number;
}

const makeSections = (count: number): Section[] =>
  Array.from({ length: count }, (_, si) => ({
    id: `s${si + 1}`,
    title: `Section ${si + 1}: ${["Getting Started", "Core Concepts", "Advanced Topics", "Projects", "Final Review"][si % 5]}`,
    lessons: Array.from({ length: 4 + (si % 3) }, (_, li) => ({
      id: `s${si + 1}-l${li + 1}`,
      title: `Lesson ${li + 1}`,
      duration: `${8 + ((si + li) % 12)}:${String((si * li * 7) % 60).padStart(2, "0")}`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      completed: false,
    })),
  }));

export const courses: Course[] = [
  {
    id: "1", title: "Python Programming Masterclass", instructor: "Dr. Arjun Mehta", instructorAvatar: "",
    thumbnail: "", rating: 4.7, reviewCount: 2340, studentCount: 18500, price: 999, originalPrice: 3999,
    category: "Programming", level: "Beginner", duration: "42 hours", lessonCount: 156,
    description: "Master Python from scratch. Covers basics, OOP, data structures, web scraping, automation, and real-world projects. Perfect for beginners aiming to become proficient Python developers.",
    lastUpdated: "2026-02", language: "English", sections: makeSections(8),
  },
  {
    id: "2", title: "Full Stack Web Development Bootcamp", instructor: "Priya Sharma", instructorAvatar: "",
    thumbnail: "", rating: 4.8, reviewCount: 3120, studentCount: 24300, price: 1999, originalPrice: 5999,
    category: "Web Development", level: "Intermediate", duration: "68 hours", lessonCount: 240,
    description: "Complete full stack development with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and deployment. Build 10+ real projects.",
    lastUpdated: "2026-03", language: "English", sections: makeSections(12),
  },
  {
    id: "3", title: "Data Structures and Algorithms", instructor: "Vikram Singh", instructorAvatar: "",
    thumbnail: "", rating: 4.6, reviewCount: 1890, studentCount: 15200, price: 1499, originalPrice: 4499,
    category: "Programming", level: "Intermediate", duration: "55 hours", lessonCount: 198,
    description: "Deep dive into DSA with visual explanations. Arrays, linked lists, trees, graphs, dynamic programming, and 200+ coding problems with solutions.",
    lastUpdated: "2026-01", language: "English", sections: makeSections(10),
  },
  {
    id: "4", title: "Cloud Computing Fundamentals", instructor: "Neha Gupta", instructorAvatar: "",
    thumbnail: "", rating: 4.5, reviewCount: 980, studentCount: 8900, price: 1299, originalPrice: 3999,
    category: "Cloud", level: "Beginner", duration: "38 hours", lessonCount: 120,
    description: "Learn AWS, Azure, and GCP fundamentals. Cloud architecture, deployment, serverless computing, and certification prep.",
    lastUpdated: "2026-02", language: "English", sections: makeSections(7),
  },
  {
    id: "5", title: "Machine Learning Basics", instructor: "Dr. Rajesh Kumar", instructorAvatar: "",
    thumbnail: "", rating: 4.7, reviewCount: 1560, studentCount: 12400, price: 1799, originalPrice: 4999,
    category: "AI/ML", level: "Intermediate", duration: "48 hours", lessonCount: 165,
    description: "Comprehensive ML course covering regression, classification, clustering, neural networks, and hands-on projects with scikit-learn and TensorFlow.",
    lastUpdated: "2026-03", language: "English", sections: makeSections(9),
  },
  {
    id: "6", title: "Artificial Intelligence Foundations", instructor: "Dr. Ananya Patel", instructorAvatar: "",
    thumbnail: "", rating: 4.8, reviewCount: 2100, studentCount: 16800, price: 1999, originalPrice: 5999,
    category: "AI/ML", level: "Advanced", duration: "62 hours", lessonCount: 210,
    description: "From search algorithms to deep learning. NLP, computer vision, reinforcement learning, and cutting-edge AI applications.",
    lastUpdated: "2026-03", language: "English", sections: makeSections(11),
  },
  {
    id: "7", title: "React JS Complete Guide", instructor: "Karan Desai", instructorAvatar: "",
    thumbnail: "", rating: 4.6, reviewCount: 2780, studentCount: 21000, price: 1099, originalPrice: 3499,
    category: "Web Development", level: "Intermediate", duration: "45 hours", lessonCount: 178,
    description: "Master React.js with hooks, context, Redux, React Router, TypeScript, testing, and performance optimization. Build 8 production-ready projects.",
    lastUpdated: "2026-02", language: "English", sections: makeSections(9),
  },
  {
    id: "8", title: "UI/UX Design Masterclass", instructor: "Meera Joshi", instructorAvatar: "",
    thumbnail: "", rating: 4.9, reviewCount: 1450, studentCount: 11200, price: 899, originalPrice: 2999,
    category: "Design", level: "Beginner", duration: "35 hours", lessonCount: 98,
    description: "Learn design thinking, wireframing, prototyping with Figma, user research, and create stunning interfaces. No prior experience needed.",
    lastUpdated: "2026-01", language: "English", sections: makeSections(6),
  },
  {
    id: "9", title: "Cybersecurity Fundamentals", instructor: "Amit Verma", instructorAvatar: "",
    thumbnail: "", rating: 4.5, reviewCount: 890, studentCount: 7600, price: 1599, originalPrice: 4499,
    category: "Cybersecurity", level: "Beginner", duration: "40 hours", lessonCount: 135,
    description: "Network security, ethical hacking, cryptography, penetration testing, and security compliance. Prepare for CompTIA Security+ certification.",
    lastUpdated: "2026-02", language: "English", sections: makeSections(8),
  },
  {
    id: "10", title: "DevOps and Docker Essentials", instructor: "Sanjay Rao", instructorAvatar: "",
    thumbnail: "", rating: 4.7, reviewCount: 1230, studentCount: 9800, price: 1699, originalPrice: 4999,
    category: "DevOps", level: "Intermediate", duration: "52 hours", lessonCount: 180,
    description: "CI/CD pipelines, Docker, Kubernetes, Jenkins, Terraform, monitoring, and infrastructure as code. DevOps engineering from scratch.",
    lastUpdated: "2026-03", language: "English", sections: makeSections(10),
  },
];

export const instructors: Instructor[] = [
  { id: "1", name: "Dr. Arjun Mehta", avatar: "", title: "Python & Data Science Expert", courseCount: 12, studentCount: 45000, rating: 4.8 },
  { id: "2", name: "Priya Sharma", avatar: "", title: "Full Stack Developer", courseCount: 8, studentCount: 38000, rating: 4.9 },
  { id: "3", name: "Dr. Rajesh Kumar", avatar: "", title: "AI/ML Researcher", courseCount: 6, studentCount: 28000, rating: 4.7 },
  { id: "4", name: "Meera Joshi", avatar: "", title: "Senior UX Designer", courseCount: 5, studentCount: 22000, rating: 4.9 },
  { id: "5", name: "Sanjay Rao", avatar: "", title: "DevOps Architect", courseCount: 7, studentCount: 19000, rating: 4.7 },
];

export const testimonials: Testimonial[] = [
  { id: "1", name: "Rohit Agarwal", avatar: "", course: "Python Programming Masterclass", text: "This course completely transformed my career. The hands-on projects were incredible and I landed my first developer job within 3 months!", rating: 5 },
  { id: "2", name: "Sneha Reddy", avatar: "", course: "Full Stack Web Development Bootcamp", text: "Best investment I've ever made. Priya explains complex concepts so clearly. I went from zero coding knowledge to building full apps.", rating: 5 },
  { id: "3", name: "Arjun Nair", avatar: "", course: "Machine Learning Basics", text: "The structured approach to ML made it so approachable. Now I'm confidently building ML models at work. Highly recommended!", rating: 4 },
  { id: "4", name: "Kavita Menon", avatar: "", course: "UI/UX Design Masterclass", text: "Meera's teaching style is amazing. The Figma projects were so practical. I redesigned my company's entire product after this course.", rating: 5 },
];

export const categories: Category[] = [
  { id: "1", name: "Programming", icon: "Code", courseCount: 245 },
  { id: "2", name: "Web Development", icon: "Globe", courseCount: 189 },
  { id: "3", name: "Data Science", icon: "BarChart3", courseCount: 134 },
  { id: "4", name: "Cloud Computing", icon: "Cloud", courseCount: 98 },
  { id: "5", name: "AI / Machine Learning", icon: "Brain", courseCount: 156 },
  { id: "6", name: "DevOps", icon: "GitBranch", courseCount: 87 },
  { id: "7", name: "Cybersecurity", icon: "Shield", courseCount: 76 },
  { id: "8", name: "Design", icon: "Palette", courseCount: 112 },
];

export const reviews = [
  { id: "1", user: "Rohit A.", rating: 5, text: "Excellent course with great practical examples. The instructor explains everything thoroughly.", date: "2 weeks ago" },
  { id: "2", user: "Sneha R.", rating: 4, text: "Very comprehensive and well-structured. Would love more advanced topics in future updates.", date: "1 month ago" },
  { id: "3", user: "Vikram P.", rating: 5, text: "One of the best courses I've taken online. Worth every rupee!", date: "3 weeks ago" },
  { id: "4", user: "Anita K.", rating: 4, text: "Great content and pacing. The projects really helped solidify the concepts.", date: "2 months ago" },
  { id: "5", user: "Rahul S.", rating: 5, text: "I went from complete beginner to getting a job. This course is life-changing!", date: "1 week ago" },
];
