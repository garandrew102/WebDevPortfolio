import React from "react";
import "./Cards.css";
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
} from "react-mdl";

function Cards() {
  return (
    <div className="cards">
      <div className="project-one">
        <Card shadow={5}>
          <CardTitle className="meme-park">{/* Meme Park */}</CardTitle>
          <CardText className="card-text">
            <i>
              A React web application allowing users to search for memes and
              share them on social media
            </i>
          </CardText>
          <CardActions>
            <div className="card-buttons">
              <div className="visit">
                <Button
                  raised
                  ripple
                  href="https://meme-park.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit
                </Button>
              </div>
              <div className="source-code-btn">
                <Button
                  raised
                  ripple
                  href="https://github.com/garandrew102/MemePark"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source Code
                </Button>
                <hr />
                <h5>Meme Park</h5>
              </div>
            </div>
          </CardActions>
          <CardMenu className="card-menu"></CardMenu>
        </Card>
      </div>
      <div className="project-two">
        <Card shadow={5}>
          <CardTitle className="heart2heart">{/* Heart2Heart */}</CardTitle>
          <CardText className="card-text">
            <i>
              A MERN stack social media web application coded for the Palm Beach
              Tech 2020 Hackathon and Gift for Life to share information and
              personalize the bone marrow donation process
            </i>
          </CardText>
          <CardActions>
            <div className="card-buttons">
              <div className="visit">
                <Button
                  raised
                  ripple
                  href="https://heart-2heart.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit
                </Button>
              </div>
              <div className="source-code-btn">
                <Button
                  raised
                  ripple
                  href="https://github.com/garandrew102/Heart2Heart"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source Code
                </Button>
                <hr />
                <h5>Heart2Heart</h5>
              </div>
            </div>
          </CardActions>
          <CardMenu className="card-menu"></CardMenu>
        </Card>
      </div>
      <div className="project-three">
        <Card shadow={5}>
          <CardTitle className="campo">{/* Campo */}</CardTitle>
          <CardText className="card-text">
            <i>
              A MERN stack web application where users can research and book
              campsites at any of the National Parks across the US
            </i>
          </CardText>
          <CardActions>
            <div className="card-buttons">
              <div className="visit">
                <Button
                  raised
                  ripple
                  href="https://campousa.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit
                </Button>
              </div>
              <div className="source-code-btn">
                <Button
                  raised
                  ripple
                  href="https://github.com/garandrew102/Campo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source Code
                </Button>
                <hr />
                <h5>Campo</h5>
              </div>
            </div>
          </CardActions>
          <CardMenu className="card-menu"></CardMenu>
        </Card>
      </div>
    </div>
  );
}
export default Cards;
