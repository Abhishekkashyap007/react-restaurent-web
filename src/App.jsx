import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Rooms from './Components/Rooms/Rooms'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'


function App() {

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Rooms />
      <Testimonials />
      <Footer/>
    </>
  )
}

export default App
