import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}></Cell>
        <Cell col={8}>
          <p>{this.props.skills}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
