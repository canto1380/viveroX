import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/style.css";
import LogoFooter from "../img/logo/Logo Vida Verde - horizontal.png";
import LogoFace from "../img/iconos/Face.png";
import LogoInsta from "../img/iconos/Insta.png";
import LogoTw from "../img/iconos/TW.png";
import LogoEmail from "../img/iconos/email.png"
import LogoTel from '../img/iconos/telefono.png'
import LogoUbic from '../img/iconos/ubicacion.png'

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-dark text-dark py-4 mt-4">
        <section className="container">
          <article className="row centrar-elementos">
            {/* Columna 1  */}
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <img src={LogoFooter} className="icon-footer" alt="Logo del vivero" />
            </div>
            {/* Columna 2 */}
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <h5 className="text-light mb-3">
                Seguinos en nuestras redes sociales
              </h5>
              <div className="d-flex flex-column">
                <Link
                  to={"/prueba"}
                  target="_blank"
                  className="text-light text-decoration-none"
                >
                  <img
                    src={LogoFace}
                    className="mr-2 icon-size"
                    alt="Enlace facebook del vivero"
                  />
                  /viveroverdevida
                </Link>
                <Link
                  to={"/prueba"}
                  target="_blank"
                  className="text-light my-2 text-decoration-none"
                >
                  <img
                    src={LogoInsta}
                    className="mr-2 icon-size"
                    alt="Enlace al instagram del vivero"
                  />
                  /viveroverdevida
                </Link>
                <Link
                  to={"/prueba"}
                  target="_blank"
                  className="text-light text-decoration-none"
                >
                  <img
                    src={LogoTw}
                    className="mr-2 icon-size"
                    alt="Enlace al twitter del vivero"
                  />
                  /viveroverdevida
                </Link>
              </div>
            </div>
            {/* Columna 3 */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h5 className="text-light mb-3">Contáctanos</h5>
              <div className="d-flex flex-column">
                <p className="text-light text-decoration-none mb-0">
                  <img
                    src={LogoTel}
                    className="mr-2 icon-size"
                    alt="Telefono"
                  />
                  381 578-3030
                </p>
                <p className="text-light my-2 text-decoration-none">
                  <img
                    src={LogoEmail}
                    className="mr-2 icon-size"
                    alt="Email"
                  />
                  vverdevida@gmail.com
                </p>
                <div className="d-flex">
                  <div>
                    <img
                      src={LogoUbic}
                      className="mr-2 icon-size"
                      alt="Ubicacion"
                    />
                  </div>
                  <div>
                    <p className="text-light text-decoration-none mb-0">
                      General Paz 576, T4000 San Miguel de Tucumán, TucumánGral.
                      Paz 576 - Tucumán - Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </footer>
    </Fragment>
  );
};
export default withRouter(Footer);
