import { projects } from '@/lib/constants'
import ProjectCard from '@/components/ui/ProjectCard'

export default function ProjectsPage() {
  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        All Projects
      </h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
