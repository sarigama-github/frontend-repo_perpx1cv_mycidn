import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import CampusLife from './components/CampusLife'
import Admissions from './components/Admissions'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <CampusLife />
        <Admissions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
