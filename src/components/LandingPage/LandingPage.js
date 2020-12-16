import React from "react";
import homePaint from "../../../src/videos/homePaint.mp4";
import "../../App.css";
import "./LandingPage.css";
import Button from "../Button/Button";

function LandingPage() {
  return (
    <div className="landing-page">
      <video
        autoPlay
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
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
