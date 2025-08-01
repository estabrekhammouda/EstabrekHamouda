const ScrollDots = () => {
  const sections = ['about', 'skills', 'work', 'testimonial', 'contact'];

  return (
    <div className="fixed right-6 top-1/3 flex flex-col gap-4 z-50">
      {sections.map((section, index) => (
        <a
          key={index}
          href={`#${section}`}
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-500 transition-all"
        >
          <span className="sr-only">{section}</span>
        </a>
      ))}
    </div>
  );
};

export default ScrollDots;
