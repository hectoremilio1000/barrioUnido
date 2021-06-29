import { Link } from "gatsby";
import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBarComponent = () => {
return(
  
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xs navbar-light bg-light d-flex align-items-center" id="home">
      <div className="col-lg-10 col-sm-6 col-6 col-md-10">
        <AnchorLink to="/#home" title="Our team" className="navbar-brand">
            <span className="display-6 font-weight-bold">Barrio Unido</span>
        </AnchorLink>
      </div>
        <div className="d-flex flex-row align-items-center col-lg-2 col-md-2 col-sm-6 col-6 justify-content-end bloque_sesion">
          <div className="m-2">
            <Link to="/Administrador" className="text-dark font-weight-bold iniciar_sesion">Administrador</Link>
          </div>
        </div>
    </nav>

)
};

export default NavBarComponent;
