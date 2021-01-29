import React from 'react';
import {Container} from '@material-ui/core';

function Container_Layout(props) {

    return (
      <div>
          <h1>Container Layout !!!</h1>
          <hr/>
          <Container style={{backgroundColor:'cyan'}} maxWidth="xs">
              <h2> This width is of : xs </h2>
          </Container>

          <Container style={{backgroundColor:'cyan'}} maxWidth="sm">
              <h2> This width is of :  sm </h2>
          </Container>

          <Container style={{backgroundColor:'cyan'}} maxWidth="md">
              <h2> This width is of :  md </h2>
          </Container>

          <Container style={{backgroundColor:'cyan'}} maxWidth="lg">
              <h2> This width is of : lg </h2>
          </Container>

          <Container style={{backgroundColor:'cyan'}} fixed>
              <h2> This width is of : Fixed </h2>
          </Container>



      </div>
    )
}
export default Container_Layout;
