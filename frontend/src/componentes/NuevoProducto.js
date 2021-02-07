import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import clienteAxios from "../config/axios";

const NuevoProducto = (props) => {
  const {categorias, setConsultarCat} = props
  console.log(categorias)


  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    stock: "",
    precio: "",
    categoria: "",
    image: "",
  });

  const actualizarState = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const nuevo = (e) => {
    e.preventDefault();
    console.log(producto);
    clienteAxios
      .post("/plantas/addPlanta", producto)
      .then((req) => {
        console.log("agregada");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-header text-center">
                <h3>Nuevo producto</h3>
              </div>
              <div className="card-body">
                <form onSubmit={nuevo}>
                  <div className="input-group mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre producto"
                        className="form-control"
                        onChange={actualizarState}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="descripcion"
                        placeholder="Description"
                        className="form-control"
                        onChange={actualizarState}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="stock"
                        placeholder="Stock"
                        className="form-control"
                        onChange={actualizarState}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="precio"
                        placeholder="Precio"
                        className="form-control"
                        onChange={actualizarState}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="categoria"
                        id="categoria"
                        className="form-control"
                        required
                        onChange={actualizarState}
                      >
                        <option> Seleccione Categoria..</option>
                        {categorias.map((p) => (
                          <option key={p._id} value={p._id}>
                            {" "}
                            {p.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        name="image"
                        className="custom-file-input"
                        id="inputGroupFile02"
                        onChange={actualizarState}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile02"
                        aria-describedby="inputGroupFileAddon02"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-success btn-block">
                      Agregar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(NuevoProducto);
