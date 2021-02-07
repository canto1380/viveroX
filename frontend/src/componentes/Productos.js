import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/style.css";

const Productos = (props) => {
    const { categorias, setConsultarCat, plantas, setConsultarPlantas, plantasXCat, setPlantasXCat } = props
    

    let arrayPlantas = {
        _id: "",
        nombre: "",
        descripcion: "",
        stock: "",
        precio: "",
        categoria: {
            _id: "",
            descripcion: ""
        }
    }

    let valor = [];
    let verPlantas = (id) => {
        valor = plantas.filter(p => p.categoria._id === id)
        console.log(valor)
        setPlantasXCat(valor)
    }
    return (
        <Fragment>
            <Navbar />
            <main className="mt-navbar">
                <section>
                    <nav
                        className="navbar position-fixed navbar-expand bg-color2 navbar-light text-light font-weight-bold w-100 navProductos"
                        id="sm-nav"
                    >
                        {categorias.map(c => (

                            <ul key={c._id} className="navbar-nav">
                                <li className="nav-item active">
                                    <button type="button" className="nav-link small button-formato" onClick={() => verPlantas(c._id)}>
                                        {c.descripcion}
                                    </button>
                                </li>
                            </ul>
                        ))}
                    </nav>
                </section>
                <section className="container pt-5">
                    <article className="row mt-5">
                        {
                        plantasXCat.length === 0 
                        ? 
                            plantas.map( p =>(
                            <div key={p._id} className="card  col-sm-12 col-md-4 col-lg-3">
                                <img className="card-img-top my-3 w-100" alt="Strelitzia" />
                                <div className="card-body">
                                <h5 className="card-title">{p.nombre} <span className="badge badge-warning">Nuevo</span></h5>
                                <p className="lead small">{p.descripcion}</p>
                                </div>
                            </div>    
                            ))
                        
                        : 
                            plantasXCat.map(p => (
                                <div key={p._id} className="card  col-sm-12 col-md-4 col-lg-3">
                                <img className="card-img-top my-3 w-100" alt="Strelitzia" />
                                <div className="card-body">
                                    <h5 className="card-title">{p.nombre} <span className="badge badge-warning">Nuevo</span></h5>
                                    <p className="lead small">{p.descripcion}</p>
                                </div>
                            </div>
                            ))
                        
                        } 

                    </article>
                </section>

            </main>
            <Footer />
        </Fragment>
    );
};
export default withRouter(Productos);
