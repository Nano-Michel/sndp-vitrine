import Header from './components/Header'
import Hero from './components/Hero'
import Terrains from './components/Terrains'
import Pourquoi from './components/Pourquoi'
import Diaspora from './components/Diaspora'
import Process from './components/Process'
import ProposerTerrain from './components/ProposerTerrain'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Terrains />
        <Pourquoi />
        <Diaspora />
        <Process />
        <ProposerTerrain />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
