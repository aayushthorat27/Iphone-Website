import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
