export default function FL() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, im <span className="gradient-text">Estabrek</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Full-Stack Developer | Next.js Specialist
      </p>
      <a 
        href="#projects" 
        className="w-fit px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
      >
        View My Work
      </a>
    </section>
  )
}