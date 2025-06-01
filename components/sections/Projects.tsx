import { projects } from '@/lib/constants';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}