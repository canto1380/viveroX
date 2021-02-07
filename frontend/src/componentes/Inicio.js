import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from './Footer';
import UltimasVisitas from './UltimasVisitas'

import ImgCarro1 from '../img/slider/slider5.jpg'
import ImgCarro2 from '../img/slider/flores rojas y blancas - invernadero.jpg'
import ImgCarro3 from '../img/slider/Flores rosas y rojas -invernadero.jpg'
import ImgCarro4 from '../img/slider/Plantacion en macetas.jpg'
import ImgCarro5 from '../img/slider/slider7.jpg'

const Inicio = (props) => {
  const{plantas} = props;

  return (
    <Fragment>
      <Navbar />
      <section
        id="carousel-vivero"
        className="carousel slide mt-navbar"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-vivero"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-vivero" data-slide-to="1"></li>
          <li data-target="#carousel-vivero" data-slide-to="2"></li>
          <li data-target="#carousel-vivero" data-slide-to="3"></li>
          <li data-target="#carousel-vivero" data-slide-to="4"></li>
          <li data-target="#carousel-vivero" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={ImgCarro1}
              className="d-block w-100 carrousel-height"
              alt="Flores rojas y blancas"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImgCarro2}
              className="d-block w-100 carrousel-height"
              alt="Plantas frescas"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImgCarro3}
              className="d-block w-100 carrousel-height"
              alt="Flores rosas y rojas"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImgCarro4}
              className="d-block w-100 carrousel-height"
              alt="Plantines en macetas"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImgCarro5}
              className="d-block w-100 carrousel-height"
              alt="Cantero mix de plantas"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImgCarro4}
              className="d-block w-100 carrousel-height"
              alt="Plantas verdes"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel-vivero"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-vivero"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </section>

      {/* Contenido Principal */}
      <section className="container my-5">
        <article className="row">
          {/* Columna 1 */}
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className="container-build">
              <h1 className="display-4 py-4 fr-titulo">Entradas al blog</h1>
              {/* Tarjetas */}
              <div className="row">
                {plantas.map(p =>(
                <div key={p._id} id="card1" className="col-lg-6 mb-4">
                  <div className="card border-0 shadow">
                    <img
                      src={p.image}
                      className="card-img-top"
                      alt="imagen de bonsai"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.nombre}</h5>
                      <p className="card-text lead">{p.descripcion}
                      </p>
                      <Link
                        to={'/'}
                        className="btn bg-color2 color1 w-100"
                        >Ver más</Link>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              {/* Botones de paginacion */}
              <div
                className="btn-toolbar d-flex mt-3 justify-content-center"
                role="toolbar"
              >
                <div className="btn-group mr-2" role="group">
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary mr-1"
                    ><i className="fas fa-angle-double-left"></i
                  ></Link>
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary"
                    ><i className="fas fa-angle-left"></i
                  ></Link>
                </div>
                <div className="btn-group mr-2" role="group">
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary active"
                    >1</Link>
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary"
                    >2</Link>
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary"
                    >3</Link>
                </div>
                <div className="brn-group mr-2" role="group">
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary mr-1"
                    ><i className="fas fa-angle-right"></i
                  ></Link>
                  <Link
                    to={'/'}
                    type="button"
                    className="btn btn-secondary"
                    ><i className="fas fa-angle-double-right"></i
                  ></Link>
                </div>
              </div>
            </div>
          </div>
          {/* Columna 2 */}
          <div className="col-sm-12 col-md-5 col-lg-4 px-5 mt-5">
            {/* Formulario de busqueda */}
            <div className="mt-4">
              <h5 className="">Busqueda</h5>
              <form className="form-inline">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"
                          ><i className="fas fa-search"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre producto"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 text-right mt-2">
                    <Link to={'/'} className="btn bg-color2 color1"
                      >Buscar</Link>
                  </div>
                </div>
              </form>
              <hr />
            </div>
            {/* <!-- Listado de categorias */}
            <div className="mt-4">
              <h5 className="">Categorias</h5>
              <ul className="pl-1">
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Bonsái
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Planifica tu huerta
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Cosecha
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Decorativas
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Aromáticas
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Enfermedades
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Tips de cuidados
                  </li>
                </Link>
                <Link to={'/'} className="text-decoration-none">
                  <li
                    className="lead fz-1 mb-1 list-style list-style-hover text-secondary"
                  >
                    Hidroponia
                  </li>
                </Link>
              </ul>
              <hr />
            </div>
            {/* <!-- Publicidad */}
            <div className="mt4">
              <div className="img-hidden">
                <Link to={'/'}
                  ><img
                    src="./img/Coke Music.gif"
                    className="w-100"
                    alt="publicidad Coca Cola"
                /></Link>
                <Link to={'/'}
                  ><img
                    src="./img/publicidad 2.jpg"
                    className="w-100 mt-5"
                    alt="Publicidad Corona"
                /></Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      <Footer/>s

    </Fragment>
  );
};

export default withRouter(Inicio);
