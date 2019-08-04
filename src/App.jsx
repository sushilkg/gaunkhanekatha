import React, { Component, Fragment } from 'react';
import Gkk from './Gkk';
import Nav from './Nav';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Container>
          <Gkk />
        </Container>
      </Fragment>
    );
  }
}

export default App;
