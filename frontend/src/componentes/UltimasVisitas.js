import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const UltimasVisitas = (props) => {
  const { plantas } = props;
  console.log(plantas);

  return (
    <Fragment>
        {plantas.map((p) => (
        <div className="row">
          <div key={p._id}>
            <div id="card1" className="col-lg-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt="imagen de bonsai"
                />
                <div className="card-body">
                  <h5 className="card-title">{p.nombre}</h5>
                  <p className="card-text lead">{p.descripcion}</p>
                  <Link to={"/"} className="btn bg-color2 color1 w-100">
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
        ))}
    </Fragment>
  );
};

export default withRouter(UltimasVisitas);
