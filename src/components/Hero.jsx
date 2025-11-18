export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              A campus to learn, create, and thrive
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Bluecrest is a modern college focused on innovation, research, and community. Explore over 60 academic programs, a vibrant campus life, and a supportive network that helps you succeed.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#admissions" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">
                Start your application
              </a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-medium shadow border border-slate-200 hover:bg-slate-50 transition-colors">
                Explore programs
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Applications open for Fall 2025</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop"
                alt="Campus overview"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg border border-slate-200 rounded-xl p-4 w-56">
              <p className="text-sm font-medium text-slate-900">96% job placement</p>
              <p className="text-xs text-slate-600">Within 6 months after graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
