import React from 'react';
import {Grid} from "semantic-ui-react";
import {ReactComponent as ReactLogo} from "./assets/nameLogo.svg"

import './App.scss';

function App() {

  return (
    <div className="App">
      <Grid centered>
  <Grid.Column className={"nombre"} computer={4} mobile={8} tablet={6} >
    <ReactLogo />
    </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
