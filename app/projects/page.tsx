export default function Projects() {
  const projects = [
    { name: "Project 1", description: "Built with React" },
    { name: "Project 2", description: "Node.js API" }
  ]
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map(project => (
        <div key={project.name} className="border p-4">
          <h3 className="font-bold">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}