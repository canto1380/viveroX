import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../img/logo/Logo-Vida-Verde.png";
import "../styles/style.css";
import { isAuthenticated } from "./Funciones/Autenticacion";

const Navbar = (props) => {
  const cerrarSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    props.history.push("/");
  };
  return (
    <Fragment>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light font-weight-bold">
          <a className="navbar-brand" href="http://www.google.com.ar">
            <img src={Logo} className="icon-nav" alt="Logo del vivero" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/productos"}>
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  type="button"
                  to={"/prueba"}
                  data-toggle="modal"
                  data-target="#suscribirse"
                >
                  Suscribirse
                </Link>
              </li>
              {!isAuthenticated() && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Iniciar sesión
                  </Link>
                </li>
              )}
              {isAuthenticated() && (
                <li className="nav-item dropdown"> 
                          <a
                            className="nav-link"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <p className="iconUser text-muted">DF</p>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link to={"/"} className="nav-link text-muted">
                              <small>Configuraciones</small>
                            </Link>
                            <Link
                              to={"/"}
                              onClick={cerrarSesion}
                              className="nav-link text-muted text-sm"
                              id="salir"
                            >
                              <small>Cerrar Sesion</small>
                            </Link>
                          </div>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default withRouter(Navbar);
