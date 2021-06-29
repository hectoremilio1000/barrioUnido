import React from "react";

const imagenBanner={
    id:'1',
    url:'https://amplify-barriounido-dev-161846-deployment.s3.amazonaws.com/images/banner_barrioUnido.jpg'
}


export default function BannerComponent() {
  return (
    <div className="row banner d-flex justify-content-start " >
      <header className="col jumbotron jumbotron-fluid" style={{
        backgroundImage: `url(${imagenBanner.url})`,
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