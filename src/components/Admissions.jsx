export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Admissions made simple</h2>
        <p className="mt-3 text-slate-600">Our admissions team guides you from application to orientation. Apply in under 20 minutes.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-3xl">📝</p>
            <h3 className="mt-3 font-semibold text-slate-900">1. Apply online</h3>
            <p className="mt-2 text-slate-600 text-sm">Submit your application with transcripts and optional test scores.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-3xl">👩‍🏫</p>
            <h3 className="mt-3 font-semibold text-slate-900">2. Review & interview</h3>
            <p className="mt-2 text-slate-600 text-sm">Our faculty reviews your profile; selected applicants are invited for a chat.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-3xl">🎉</p>
            <h3 className="mt-3 font-semibold text-slate-900">3. Get your offer</h3>
            <p className="mt-2 text-slate-600 text-sm">Receive your decision and scholarship information within 2–3 weeks.</p>
          </div>
        </div>

        <a href="#contact" className="mt-10 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">
          Apply for Fall 2025
        </a>
      </div>
    </section>
  )
}
