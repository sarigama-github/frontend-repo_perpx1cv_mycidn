const programs = [
  {
    title: 'Computer Science',
    desc: 'AI, data science, software engineering, and cybersecurity tracks with hands-on labs.',
    icon: '💻',
  },
  {
    title: 'Business Administration',
    desc: 'Analytics-driven curriculum with finance, marketing, entrepreneurship, and leadership.',
    icon: '📈',
  },
  {
    title: 'Design & Media',
    desc: 'Visual design, animation, UX, and film production with industry-grade studios.',
    icon: '🎨',
  },
  {
    title: 'Health Sciences',
    desc: 'Nursing, physiotherapy, and public health with simulation centers and clinics.',
    icon: '🩺',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Programs that shape the future</h2>
          <p className="mt-3 text-slate-600">Choose from interdisciplinary degrees designed with industry partners and research mentors.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl" aria-hidden>{p.icon}</div>
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
              <a href="#admissions" className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
