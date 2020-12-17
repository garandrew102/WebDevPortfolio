import React from "react";
import homePaint from "../../../videos/homePaint.mp4";
import "../../../App.css";
import "../LandingPage/LandingPage.css";
import Button from "../../Button/Button";

function LandingPage() {
  return (
    <div className="landing-page">
      <video autoPlay muted>
        <source src={homePaint} type="video/mp4" />
      </video>
      <h1>ANDREW GARCIA</h1>
      <p>GLIBI TRIX PROD KING</p>
      <div className="landing-page-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          CONTACT
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
