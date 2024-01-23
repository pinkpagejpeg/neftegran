import Header from '../header/Header'
import Footer from '../footer/Footer'
import History from '../about/About'
import Employee from '../employee/Employee'
import Partners from '../partners/Partners'
import history from '../../assets/images/history.jpg'

const About = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <History
                    about={{
                        image: history,
                        title: "История компании",
                    }} />
                <Employee />
                <Partners />
            </div>
            <Footer />
        </>
    );
}

export default About;