export default function About() {
  return (
    <section id="about" className="px-6 py-12 bg-white dark:bg-purple-400 text-purple-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Im a passionate full-stack developer based in Tunisia, focused on building responsive, accessible,
             and high-performance websites. I enjoy turning complex problems into elegant solutions with clean 
             design and robust code. I speak French, Arabic, and English — and Im always open to exciting
              freelance opportunities.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="public/images/profil.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg border border-gray-400 dark:border-gray-700"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-12">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6">
            I am a passionate software engineering student with a focus on front-end development. 
            Currently pursuing my Bachelor s degree at Université de Monastir, I am constantly 
            expanding my knowledge through projects and competitions.
          </p>
          <p className="text-lg mb-6">
            My journey in computer science began in high school, and since then I have developed 
            several projects including mobile apps, web platforms, and system applications.
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> istabrek.hamouda200@gmail.com</p>
            <p><strong>Phone:</strong> +216 29 565 128</p>
            <p><strong>Location:</strong> Mahdia, Tunisia</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
    
  )
}
