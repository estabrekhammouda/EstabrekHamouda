'use client';

import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/estabrekhammouda' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/estabrek-hammouda-1127ba2a5/' },
  { icon: Instagram, href: 'https://www.instagram.com/istabrek_hamouda/ ' },
  { icon: Facebook, href: 'https://www.facebook.com/ista.rek.hamouda' },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 p-4">
      {socials.map(({ icon: Icon, href }, i) => (
        <div
          key={i}
          className="bg-slate-800/80 backdrop-blur-sm rounded-full p-3 hover:bg-purple-600/80 transition-all duration-300 group"
        >
          <a href={href} className="text-purple-400 group-hover:text-white transition-colors">
            <Icon size={20} />
          </a>
        </div>
      ))}
    </div>
  );
}
