'use client'

import { Mail, Linkedin, Github } from 'lucide-react'

type ContactCardProps = {
  href: string
  icon: React.ElementType
  title: string
  description: string
  isExternal?: boolean
}

const ContactCard = ({ href, icon: Icon, title, description, isExternal = false }: ContactCardProps) => (
  <a 
    href={href} 
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="group"
  >
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
      <Icon size={32} className="text-purple-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </a>
)

const ContactSection = () => (
  <section id="contact" className="py-20 px-4 bg-black/20">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-900 to-pink-400 bg-clip-text text-transparent">
        Lets Connect
      </h2>
      <p className="text-xl text-gray-300 mb-12">
        Im always interested in new opportunities and collaborations. Lets build something amazing together!
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ContactCard 
          href="mailto:istabrek.hamouda200@gmail.com"
          icon={Mail}
          title="Email"
          description="istabrek.hamouda200@gmail.com"
        />
        <ContactCard 
          href="https://linkedin.com/in/estabrek-hammouda-1127ba2a5"
          icon={Linkedin}
          title="LinkedIn"
          description="Connect with me"
          isExternal={true}
        />
        <ContactCard 
          href="https://github.com/estabrekhammouda"
          icon={Github}
          title="GitHub"
          description="View my repositories"
          isExternal={true}
        />
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
        <h3 className="text-2xl font-semibold mb-6 text-purple-400">Ready to collaborate?</h3>
        <p className="text-gray-300 mb-6">
          Whether you have a project in mind, need a developer for your team, or just want to chat about technology, Id love to hear from you.
        </p>
        <a 
          href="mailto:istabrek.hamouda200@gmail.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </a>
      </div>
    </div>
  </section>
)

export default ContactSection


