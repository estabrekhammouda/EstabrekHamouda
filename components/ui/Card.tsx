import Link from 'next/link'

export default function ProjectCard({ project }: { project: any }) {
  return (  
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={project.link} 
          className="text-blue-500 hover:text-blue-400 text-sm font-medium"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}