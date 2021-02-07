import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import clienteAxios from "../config/axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FotoEmpresa from "../img/login/cultivo58.jpg";

const Login = (props) => {
  const [err, setErr] = useState(false);

  const [user, setUser] = useState({
    email: "",
    clave: "",
  });
  const validacion = {
    id: "",
    token: "",
  };
  const valoresState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const validarUser = (e) => {
      console.log(user)
    e.preventDefault();
    clienteAxios
      .post("/usuarios/val", user)
      .then((req) => {
        validacion.id = req.data._id;
        validacion.token = req.data.token;
        localStorage.setItem("jwt", JSON.stringify(validacion));

        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <main className="container mt-navbar">
        <article className="row border">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 className="tituloLog my-3 text-center">Iniciar Sesión</h1>
            <form onSubmit={validarUser}>
              <div className="form-group logGroup">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="bonsái@vivero.com"
                  required
                  className="form-control border bg-light"
                  onChange={valoresState}
                />
              </div>
              <div className="form-group logGroup">
                <label>Contraseña</label>
                <input
                  name="clave"
                  type="password"
                  placeholder="**********"
                  required
                  className="form-control border bg-light"
                  onChange={valoresState}
                />
              </div>
              <div className="row">
                <div className="form-group logGroup col-sm-12 col-md-5 ml-4">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">Recordar usuario</label>
                </div>
              </div>
              <div className="col text-center">
                <button
                  className="btn bg-color2 color1 mb-3 btnIniciar"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </div>
              {/* Boton recuperar contraseña y modal */}
              <button
                type="button"
                className="btn col text-center btnRec recuperar p-1 my-1 titlesandbtns f-pala color5 w-100"
                data-toggle="modal"
                data-target="#recuperarModal"
              >
                ¿Olvidó su Contraseña?
              </button>

              {/* Modal recuperar contraseña */}
              <div
                className="modal fade"
                id="recuperarModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div id="rootRecuPass"></div>
                  </div>
                </div>
              </div>
              {/* REDIRECCIONAR AL MODAL DE RECUPERAR CONTRASEÑA */}
            </form>

            <div className="container alternativeLogin">
              <div className="row">
                <div className="fbBtn col text-center">
                  <Link to={"/"} className="btn btn-primary logFb my-2 f-pala">
                    <i className="fab fa-facebook-square"></i>
                    Iniciar Sesión con Facebook
                  </Link>
                </div>
                <div className="ggBtn col text-center">
                  <Link
                    to={"/"}
                    className="btn btn-secondary logGg my-2 f-pala"
                  >
                    <i className="fab fa-google"></i> Iniciar Sesión con Google
                  </Link>
                </div>
              </div>
              <Link
                to={"/registrarse"}
                className="btn col text-center btnReg registrarse p-1 my-1 titlesandbtns color5 f-pala"
                data-toggle="modal"
                data-target="#registrarseModal"
              >
                ¿No tienes cuenta? Registrate!
              </Link>
              {/* Modal Registrarse */}
              <div
                className="modal fade"
                id="registrarseModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div id="rootRegist"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="imgLog col-sm-12 col-md-6 col-lg-6 px-0">
            <img
              src={FotoEmpresa}
              className="loginImg w-100 h-100"
              alt="Pensemos en verde juntos"
            />
            <h3 className="imgText color1 f-pala">Pensemos en verde juntos</h3>
          </div>
        </article>
      </main>
      {/* Modal Suscribirse */}
      <div
        className="modal fade"
        id="suscribirse"
        tabIndex="1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div id="rootSusc"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Login);
