import React from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links';


export default function BannerComponent() {
  return (
    <div className="row banner d-flex justify-content-start " >
      <header className="col jumbotron jumbotron-fluid" style={{
        backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/banner_rutalab_nuevo.jpg")`,
        backgroundSize: "cover",
        height: "80vh",
        backgroundPosition:"center"
      }}>
    <div className="container-fluid">
      <div className="col-6 col-sm-7 justify-content-md-start">
        <h1 className="display-5 font-weight-bold pt-3 text-start">
        Pide autorización
        <h3 className="lead display-5 pb-5">
        En el chat
        </h3>
        </h1>

      </div>
    </div>
  </header>
</div>
  );
}