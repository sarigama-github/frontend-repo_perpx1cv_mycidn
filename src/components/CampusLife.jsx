export default function CampusLife() {
  return (
    <section id="campus" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Life on campus</h2>
          <p className="mt-3 text-slate-600">From hackathons to art shows, 120+ clubs, and a city full of opportunity—there’s always something to do.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Students collaborating" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-slate-900">Student communities</h3>
              <p className="mt-2 text-slate-600 text-sm">Meet peers who share your passions in tech, arts, sports, and social impact.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5fGVufDB8MHx8fDE3NjM0ODIwMTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Modern library" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-slate-900">Spaces that inspire</h3>
              <p className="mt-2 text-slate-600 text-sm">Learn and create in modern labs, studios, libraries, and collaborative hubs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
