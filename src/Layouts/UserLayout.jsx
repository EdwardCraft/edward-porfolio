import { Outlet, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Header from "Components/User/Header";
import Footer from "Components/User/Footer";

const UserLayout = () => {
  return (
    <>
      <Container className="d-flex justify-content-md-center">
        <Header />
      </Container>

      <Navbar bg="white">
        <Container>
          <Navbar.Brand href="/">Eduardo Flores</Navbar.Brand>
          <Nav>
            <NavLink to="about">about</NavLink>
            <NavLink to="work">work</NavLink>
            <NavLink to="contact">contact</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <section>
        <Outlet />
      </section>

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default UserLayout;
