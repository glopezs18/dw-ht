import React, { Fragment, useState } from 'react'
import ProductList from '../components/ProductList';
import ButtonList from '../components/ButtonList';
import data from '../data/data';
import '../styles/home.scss';

function Home() {

    const allCategories = [
        'Todos',
        ...new Set(data.map(product => product.category)),
    ];

    const [categories, setCategories] = useState(allCategories);
    const [products, setProducts] = useState(data);
    const [active, setActive] = useState(0)

    const filterCategory = (category) => {
        if (category === 'Todos') {
            setProducts(data)
            return
        }
        const filteredData = data.filter(product => product.category === category);                
        setProducts(filteredData)
    }

    const toggle = (index) => {
        console.log(active);
        setActive(index == active ? -1 : index)
    }    

   
    return (
        <Fragment>
            <div className="text-center bg-image banner-home">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3 fw-bold">Las mejores ofertas y promociones</h1>
                            <p>¡Descubre nuestras ofertas irresistibles y ahorra en grande en nuestros productos de alta calidad! ¡No te pierdas esta oportunidad única de comprar a precios increíbles!</p>
                            {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <section id="products-container" className="p-5">
                <div className="container">
                    <div className="pricing-header pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-bold">Productos</h1>
                        <p className="fs-5 text-muted">Descubre nuestra sección de productos de supermercado, donde encontrarás una amplia gama de alimentos frescos, productos básicos y delicias gourmet. Hacemos que tus compras sean más fáciles y convenientes.</p>
                    </div>
                </div>
                <ButtonList categories={categories} filterCategory={filterCategory} toggle={toggle} active={active} />

                <ProductList products={products} />
            </section>
        </Fragment>
    );
}

export default Home