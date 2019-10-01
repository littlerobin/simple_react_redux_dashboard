import React from "react";
import LoginComponent from "./login.component";

const HomeComponent = () => {
  return (
    <>
      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-md-12 text-center">Welcome to CereBrum</div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center theme-forecolor">
          IOT/AI Platform
        </div>
      </div>

      <div className="row row-padding" style={{ paddingTop: "30px" }}>
        <div className="col-md-1" />
        <div className="col-md-10 text-center" style={{ fontSize: "12px" }}>
          Providing AI & IoT-based sustainable urban mobility and smart city
          solutions across different sectors in the MENA region. Delivering
          world-class technology solutions, Dubai Technologies helps build
          smarter cities today and tomorrow. Our innovations move people to a
          better connected world.
        </div>
      </div>

      <div className="row row-padding" style={{ paddingTop: "100px" }}>
        <div className="col-md-3" />
        <div className="col-md-6">
          <LoginComponent />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
