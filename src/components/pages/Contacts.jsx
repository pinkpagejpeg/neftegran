import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContactInfo from '../contactInfo/ContactInfo';
import Map from '../map/Map';
import Feedback from '../feedback/Feedback';
import Faq from '../faq/Faq';

const Contacts = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <ContactInfo />
                <Map />
                <Faq />
                <Feedback />
            </div>
            <Footer />
        </>
    );
}

export default Contacts;