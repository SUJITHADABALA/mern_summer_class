import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStream } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const routes = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Why us?", href: "#" },
  { name: "How It Works", href: "#" },
];

const NavMenu = ({ routes, children }) => (
  <Nav className="mb-2 mb-lg-0 mt-4 mt-lg-0">
    {routes.map((route, i) => (
      <Nav.Item key={i}>
        <Nav.Link href={route.href}>{route.name}</Nav.Link>
      </Nav.Item>
    ))}
    {children}
  </Nav>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  children: PropTypes.node,
};

const NavMenu2 = () => (
  <Nav className="mx-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
    <Nav.Item className="mb-2 mb-lg-0">
      <Button variant="outline-primary" className="border-secondary h-100 px-3">
        <FontAwesomeIcon icon={faStream} /> All Category
      </Button>
    </Nav.Item>
    <Nav.Item>
      <SearchForm />
    </Nav.Item>
  </Nav>
);

const NavMenu3 = () => (
  <Nav className="ezy__nav1-navbar-nav flex-row ms-auto">
    <Nav.Item>
      <Form.Select
        name="currency"
        className="ezy__nav6-currency border-0 bg-transparent"
      >
        <option value="">Currency</option>
        <option value="en">US Dollar</option>
        <option value="bn">UK Dollar</option>
      </Form.Select>
    </Nav.Item>
    <Nav.Item>
      <Form.Select
        name="language"
        className="ezy__nav6-currency border-0 bg-transparent"
      >
        <option value="">Language</option>
        <option value="en">English</option>
        <option value="bn">Bangla</option>
      </Form.Select>
    </Nav.Item>
  </Nav>
);

const AuthNavMenu = () => (
  <Nav className="flex-row mb-2 mb-lg-0">
    <Nav.Item>
      <Button variant="outline-primary" className="px-3">
        Account
      </Button>
    </Nav.Item>
  </Nav>
);

const SearchForm = () => (
  <Form className="mx-lg-3 mb-3 mb-lg-0">
    <InputGroup>
      <Form.Control type="search" placeholder="City, Address, Zip" />
      <Button variant="primary" className="px-3" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  </Form>
);

const Navigation6 = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const toggleSearch = () => setIsOpenSearch(!isOpenSearch);

  return (
    <div className="ezy__nav6 light">
      <Navbar expand="lg" className="flex-column py-3">
        <div className="w-100">
          <Container className="d-flex">
            <div>
              <Navbar.Toggle aria-controls="ezy__nav6-navbar-nav">
                <span>
                  <span />
                </span>
              </Navbar.Toggle>
              <Navbar.Collapse id="ezy__nav6-navbar-nav">
                <NavMenu routes={routes} />
              </Navbar.Collapse>
            </div>
            <NavMenu3 />
          </Container>
        </div>
        <hr className="w-100 ezy__nav1-separator" />
        <Container>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Button
            variant=""
            className={classNames("navbar-toggler", {
              collapsed: !isOpenSearch,
            })}
            onClick={toggleSearch}
            aria-controls="ezy__nav6-navbar-nav-2"
          >
            <span>
              <span />
            </span>
          </Button>
          <Navbar.Collapse in={isOpenSearch} id="ezy__nav6-navbar-nav-2">
            <NavMenu2 />
            <AuthNavMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation6;
