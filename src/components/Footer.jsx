export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-xl font-semibold text-white">Bluecrest College</p>
          <p className="mt-2 text-sm text-slate-400">Learning that moves you forward.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="#campus" className="hover:text-white">Campus Life</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Resources</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="/test" className="hover:text-white">System Check</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Visit us</p>
          <p className="mt-3 text-sm text-slate-400">123 University Ave, Blue City</p>
          <p className="text-sm text-slate-400">(555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} Bluecrest College</p>
          <p>Made with ❤️ for education</p>
        </div>
      </div>
    </footer>
  )
}
