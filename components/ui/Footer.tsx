export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-5">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()}estabrekhamouda.AllRightsReserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/estabrekhammouda" className="hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/estabrek-hammouda-1127ba2a5" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
