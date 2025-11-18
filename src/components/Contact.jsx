import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Get in touch</h2>
            <p className="mt-4 text-slate-600">Questions about programs, scholarships, or campus life? Our team is here to help.</p>
            <div className="mt-6 space-y-3 text-slate-700 text-sm">
              <p><span className="font-semibold">Address:</span> 123 University Ave, Blue City</p>
              <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
              <p><span className="font-semibold">Email:</span> admissions@bluecrest.edu</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-3xl">✅</p>
                <p className="mt-3 font-medium text-slate-900">Thanks! We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">First name</label>
                    <input required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Last name</label>
                    <input required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">Message</label>
                    <textarea rows={4} required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
