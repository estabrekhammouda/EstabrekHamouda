import { ChevronDown } from 'lucide-react';

import Button from '../ui/button';

export default function FemaleLead() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
      <div className="text-center z-10">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Estabrek Hammouda
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineering Student & Front-End Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="#projects">
            View My Work
          </Button>
          <Button variant="secondary" href="#contact">
            Get In Touch
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-500" />
        </div>
      </div>
    </section>
  );
}