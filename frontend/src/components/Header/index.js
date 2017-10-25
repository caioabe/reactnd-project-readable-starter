import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

import './styles.css';

const Header = () => (
  <Navbar className="header">
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLinkContainer to="/">
          <a className="header__title">Readable</a>
        </IndexLinkContainer>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <IndexLinkContainer to="/">
        <NavItem>All Posts</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/category">
        <NavItem>Categories</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export { Header };
