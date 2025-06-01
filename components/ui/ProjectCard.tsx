import { Smartphone, Globe, Database } from 'lucide-react';

type Project = {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
};

export default function ProjectCard({ project, reverse }: { project: Project, reverse: boolean }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={`space-y-6 ${reverse ? 'md:col-start-2' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
              {project.type}
            </span>
            <span className="text-gray-400">{project.year}</span>
          </div>
          <h3 className="text-2xl font-bold text-purple-400 mb-2">{project.title}</h3>
          <p className="text-xl text-gray-300 mb-4">{project.subtitle}</p>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className={`${reverse ? 'md:col-start-1' : ''}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-slate-800 rounded-lg p-8 border border-white/10 flex items-center justify-center h-64">
            {project.type === 'Mobile App' && <Smartphone size={64} className="text-purple-400" />}
            {project.type === 'Web Platform' && <Globe size={64} className="text-purple-400" />}
            {project.type === 'Desktop Application' && <Database size={64} className="text-purple-400" />}
          </div>
        </div>
      </div>
    </div>
  );
}
