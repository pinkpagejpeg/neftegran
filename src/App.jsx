import './styles/App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Goals from './components/goals/Goals'
import Offers from './components/offers/Offers'
import Pros from './components/pros/Pros'
import News from './components/news/News'
import Footer from './components/footer/Footer'
import neftedobicha from './assets/images/about.jpg'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Hero />
        <About
          about={{
            image: neftedobicha,
            title: "О компании",
          }} />
          <Goals />
          <Offers />
          <Pros />
          <News />
      </div>
      <Footer />
    </div>
  )
}

export default App
