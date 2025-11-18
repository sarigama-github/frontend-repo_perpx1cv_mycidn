export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">A community of thinkers and doers</h2>
          <p className="mt-4 text-slate-600">We combine rigorous academics with real-world practice. Our partnerships with leading companies and research labs give you access to internships, co-ops, and mentorship.</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
            <li className="rounded-lg border border-slate-200 p-4 bg-white">17:1 student–faculty ratio</li>
            <li className="rounded-lg border border-slate-200 p-4 bg-white">60+ undergraduate programs</li>
            <li className="rounded-lg border border-slate-200 p-4 bg-white">Top 5% for graduate employability</li>
            <li className="rounded-lg border border-slate-200 p-4 bg-white">$40M in annual scholarships</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop" alt="Graduation ceremony" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
