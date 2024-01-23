import Header from '../header/Header'
import Hero from '../hero/Hero'
import About from '../about/About'
import Goals from '../goals/Goals'
import Offers from '../offers/Offers'
import Pros from '../pros/Pros'
import News from '../news/News'
import Footer from '../footer/Footer'
import neftedobicha from '../../assets/images/about.jpg'

const Home = () => {
    return (
        <>
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
        </>
    );
}

export default Home;