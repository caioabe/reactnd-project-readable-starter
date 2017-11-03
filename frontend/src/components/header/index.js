import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
  <Navbar className="header">
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a className="header__title">Readable</a>
        </LinkContainer>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer exact to="/">
        <NavItem>All Posts</NavItem>
      </LinkContainer>
      <LinkContainer to="/category">
        <NavItem>Categories</NavItem>
      </LinkContainer>
      <LinkContainer exact to={'/new-post'}>
        <NavItem>Create New Post</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export { Header };
