import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

class Nav extends Component {
  render() {
    return (
      <Menu>
        <Container>
          <Menu.Item header>Gaun Khane Katha</Menu.Item>
          <Menu.Item name='Home' />
          <Menu.Item name='About' />
          <Menu.Item>
            <Button floated='right' positive inverted content='Add GKK' />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Nav;
