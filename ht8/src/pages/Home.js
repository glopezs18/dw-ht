import React, { Fragment, useState } from 'react'
import ProductList from '../components/ProductList';
import ButtonList from '../components/ButtonList';
import data from '../data/data';
import '../styles/home.scss';

function Home() {

    const allCategories = [
        'All',
        ...new Set(data.map(product => product.category)),
    ];

    const [categories, setCategories] = useState(allCategories);
    const [products, setProducts] = useState(data);

    const filterCategory = (category) => {
        if (category === 'All') {
            setProducts(data)
            return
        }

        const filteredData = data.filter(product => product.category === category);
        setProducts(filteredData)
    }
    return (
        <Fragment>
            <div className="text-center bg-image banner-home">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Catálogo de productos</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis ligula, non imperdiet sapien lobortis pulvinar.  </p>
                            <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                        </div>
                    </div>
                </div>
            </div>
            <section id="products-container" className="p-5">
                <div className="container">
                    <div className="pricing-header pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Productos</h1>
                        <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                    </div>
                </div>
                <ButtonList categories={categories} filterCategory={filterCategory} />

                <ProductList products={products} />
            </section>
        </Fragment>
    );
}

export default Home