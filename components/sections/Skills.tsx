"use client";
import { useState } from 'react';
import { skills, experience } from '@/lib/constants';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const deviconMap: Record<string, string> = {
    'Python': 'devicon-python-plain colored',
    'Java': 'devicon-java-plain colored',
    'C++': 'devicon-cplusplus-plain colored',
    'C': 'devicon-c-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'PHP': 'devicon-php-plain colored',
    'HTML': 'devicon-html5-plain colored',
    'CSS': 'devicon-css3-plain colored',
    'React': 'devicon-react-original colored',
    'React Native': 'devicon-react-original colored',
    'Next.js': 'devicon-nextjs-plain colored',
    'Tailwind': 'devicon-tailwindcss-plain colored',
    'Node.js': 'devicon-nodejs-plain colored',
    'Spring': 'devicon-spring-plain colored',
    'MongoDB': 'devicon-mongodb-plain colored',
    'MySQL': 'devicon-mysql-plain colored',
    'Git': 'devicon-git-plain colored',
    'GitHub': 'devicon-github-original colored',
    'Bootstrap': 'devicon-bootstrap-plain colored',
    'Figma': 'devicon-figma-plain colored'
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-10">Skills & Experience</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills Section */}
        <div className="space-y-8">
          {skills.map((group, idx) => (
            <ul key={idx} className="flex flex-wrap gap-3">
              {group.map((skillName) => {
                const iconClass = deviconMap[skillName];
                return (
                  <li
                    key={skillName}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skillName)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium inline-block transition-all duration-200 group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
                      {skillName}
                    </span>
                    {iconClass && (
                      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 ease-in-out ${hoveredSkill === skillName ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
                        <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                          <i className={`${iconClass} text-3xl`}></i>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-gray-700 border-r border-b border-gray-200 dark:border-gray-600 rotate-45"></div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>

        {/* Experience Section */}
        <div>
          {experience.map((exp) => (
            <div key={exp.year} className="mb-6">
              <p className="text-lg font-semibold mb-2">{exp.year}</p>
              {exp.items.map((item) => (
                <div key={item.title} className="mb-2">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.company}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
