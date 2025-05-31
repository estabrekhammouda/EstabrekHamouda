import { PROJECTS } from '@/lib/constants'
import ProjectCard from '@/components/ui/Card'

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}