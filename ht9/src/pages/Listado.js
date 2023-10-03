import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../styles/pages.scss';

function Listado() {
    const [list, setList] = useState([])
    const [recoveryData, setRecoveryData] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                return response.json()
            })
            .then((list) => {
                setList(list)
            })
    }, [])

    function showList() {
        return (

            <div>
                <section >
                    <div class="container py-5">
                        <div class="row justify-content-center mb-3">
                            {list.map(item => {
                                return (
                                    <div class="col-md-12 col-xl-10" style={{marginBottom: "10px"}} key={item.id}>
                                        <div class="card shadow-0 border rounded-3">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                                            <div style={{width: "210px", height:"140px", backgroundImage: `url(${item.image})`, backgroundSize: "cover"}}></div>
                                                            {/* <img src={item.image}
                                                                class="w-100" /> */}
                                                            <a href="#!">
                                                                <div class="hover-overlay">
                                                                    <div class="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-xl-6" style={{ textAlign: "left" }}>
                                                        <h5>{item.title}</h5>
                                                        <div class="mt-1 mb-0 text-muted small">
                                                            <span>{item.category}</span>
                                                        </div>
                                                        <p class="mb-4 mb-md-0">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start" style={{ textAlign: "center" }}>
                                                        <div class="flex-row align-items-center mb-1">
                                                            <h4 class="mb-1 me-1">${item.price}</h4>
                                                        </div>
                                                        <h6 class="text-success">Envío gratis</h6>
                                                        <div class="d-flex flex-column mt-4">
                                                            <Link to={`/list/${item.id}`} style={{color: "#fff", textDecoration: "none"}} relative="route"><button class="btn btn-primary btn-sm" type="button">Detalles</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                setList(list)
                setRecoveryData(true)
            })
    }, [])

    if (recoveryData)
        return showList()
    else
        return (<div>Recuperando Datos...</div>)
}

export default Listado