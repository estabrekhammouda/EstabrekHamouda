export const skills = [
  ["Python", "Java", "C++", "C"],
  ["HTML", "CSS", "JavaScript", "React", "React Native", "Next.js", "Tailwind"],
  ["Node.js", "Spring", "PHP", "MongoDB", "MySQL"],
  ["Git", "GitHub", "Bootstrap", "Figma"]
];
export const deviconMap: Record<string, string> = {
    'Python': 'devicon-python-plain colored',
    'Java': 'devicon-java-plain colored',
    'C++': 'devicon-cplusplus-plain colored',
    'C': 'devicon-c-plain colored',
    'HTML': 'devicon-html5-plain colored',
    'CSS': 'devicon-css3-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'React': 'devicon-react-original colored',
    'React Native': 'devicon-react-original colored',
    'Next.js': 'devicon-nextjs-plain colored',
    'Tailwind': 'devicon-tailwindcss-plain colored',
    'Node.js': 'devicon-nodejs-plain colored',
    'Spring': 'devicon-spring-plain colored',
    'PHP': 'devicon-php-plain colored',
    'MongoDB': 'devicon-mongodb-plain colored',
    'MySQL': 'devicon-mysql-plain colored',
    'Git': 'devicon-git-plain colored',
    'GitHub': 'devicon-github-original colored',
    'Bootstrap': 'devicon-bootstrap-plain colored',
    'Figma': 'devicon-figma-plain colored'
  };

export const projects = [
    {
      title: "MindWell",
      subtitle: "Mental Health Assessment App",
      description: "Cross-platform mobile application for iOS and Android with AI-powered chatbot and secure social features.",
      tech: ["React Native", "React.js", "Node.js", "MongoDB", "GPT-3.5 API", "JWT"],
      features: [
        "90% code reuse across platforms",
        "Real-time updates via MongoDB Change Streams",
        "AI-powered 24/7 chatbot with conversation history",
        "Secure anonymous social feed with content moderation"
      ],
      year: "2025",
      type: "Mobile App"
    },
    {
      title: "FLIX",
      subtitle: "Movie Review Platform",
      description: "Responsive web platform for movie reviews with user authentication and mobile-first design.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "95% responsive design score",
        "User authentication system",
        "Client-side form validation",
        "Seamless desktop and mobile experience"
      ],
      year: "2025",
      type: "Web Platform"
    },
    {
      title: "Hospital Management System",
      subtitle: "Healthcare Management Solution",
      description: "Console-based hospital management system with MySQL integration and OOP design principles.",
      tech: ["Java", "MySQL", "JDBC"],
      features: [
        "Object-oriented design with abstract classes",
        "MySQL database integration",
        "Appointment scheduling validation",
        "Efficient data storage and retrieval"
      ],
      year: "2025",
      type: "Desktop Application"
    }
  ];

export  const experience = [
  {
    year: "2024",
    items: [
      { title: "Freelancer", company: "UpWork" },    ]
  },
  {
    year: "2025",
    items: [
      { title: "internership", company: "EliteRobotique" },
    ]}
];
  export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
