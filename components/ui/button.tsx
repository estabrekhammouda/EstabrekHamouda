import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', href, children }: ButtonProps) {
  const baseClasses = 'px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105';
  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
    : 'border border-purple-400 hover:bg-purple-400/10';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}