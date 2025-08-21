import { navItems} from '@/lib/constants';

const ScrollDots = () => {

  return (
    <div className="fixed right-6 top-1/3 flex flex-col gap-4 z-50">
      {navItems.map((navItem, index) => (
        <a
          key={index}
          href={`#${navItem}`}
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-500 transition-all"
        >
          <span className="sr-only">{navItem.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ScrollDots;
