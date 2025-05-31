export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Hi, I'm <span className="text-purple-500">[Your Name]</span></h1>
      </section>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Project cards go here */}
      </div>
    </main>
  )
}
