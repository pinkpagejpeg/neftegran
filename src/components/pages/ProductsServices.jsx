import Header from '../header/Header'
import Footer from '../footer/Footer'
import Catalog from '../catalog/Catalog';

const ProductsServices = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <Catalog />
            </div>
            <Footer />
        </>
    );
}

export default ProductsServices;