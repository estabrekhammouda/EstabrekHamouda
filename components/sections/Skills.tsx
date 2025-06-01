"use client";
import { useState } from 'react';
import { skills, skills1,experience } from '@/lib/constants';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Create a mapping of skill names to their icons
  const skillIconMap = skills1.reduce((map, skill) => {
    map[skill.name] = skill.url;
    return map;
  }, {} as Record<string, string>);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-10">Skills & Experience</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills Section */}
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillNames]) => (
            <div key={category}>
              <h2 className="text-xl font-semibold mb-3">{category}</h2>
              <ul className="flex flex-wrap gap-3">
                {skillNames.map((skillName) => {
                  const iconUrl = skillIconMap[skillName];
                  return (
                    <li
                      key={skillName}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skillName)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Name */}
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium inline-block">
                        {skillName}
                      </span>

                      {/* Skill Icon on Hover */}
                      {hoveredSkill === skillName && iconUrl && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-600">
                            <img
                              src={iconUrl}
                              alt={skillName}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

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


