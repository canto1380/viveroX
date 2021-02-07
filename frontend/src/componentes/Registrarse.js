import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FotoEmpresa from '../img/login/cultivo58.jpg'

const Registrarse =() =>{
    return(
        <Fragment>
            <Navbar
                
            />
            <main className="container mt-navbar">
                <article className="row border">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1 className="tituloLog my-3 text-center">Registrarse</h1>
                    <form>
                    <div className="form-group logGroup">
                            <label>Nombre</label>
                            <input type="text" placeholder="Ingrese su nombre completo" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Apellido</label>
                            <input type="text" placeholder="Ingrese su/s apellido/s" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>DNI</label>
                            <input type="text" placeholder="12345678" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Email</label>
                            <input type="text" placeholder="bonsái@vivero.com" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Telefono/Celular</label>
                            <input type="text" placeholder="3815124578" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Direccion</label>
                            <input type="text" placeholder="Laprida 2321" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Localidad</label>
                            <input type="text" placeholder="bonsái@vivero.com" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Provincia</label>
                            <input type="text" placeholder="bonsái@vivero.com" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Pais</label>
                            <input type="text" placeholder="bonsái@vivero.com" required
                            className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Contraseña</label>
                            <input type="password" placeholder="**********" required className="form-control border bg-light"/>
                        </div>
                        <div className="form-group logGroup">
                            <label>Repetir contraseña</label>
                            <input type="password" placeholder="**********" required className="form-control border bg-light"/>
                        </div>
                        
                        <div className="col text-center">
                            <button className="btn bg-color2 color1 mb-3 btnIniciar" type="submit">Registrarse</button>
                        </div>
                    
                </form>
            </div>
            <div className="imgLog col-sm-12 col-md-6 col-lg-6 px-0">
                <img src={FotoEmpresa} className="loginImg w-100 h-100" alt="Pensemos en verde juntos"/>
                <h3 className="imgText color1 f-pala">Pensemos en verde juntos</h3>
            </div>
        </article>
    </main>

            <Footer/>
        </Fragment>
    )
}

export default withRouter(Registrarse)