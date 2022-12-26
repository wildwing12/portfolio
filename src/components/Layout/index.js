import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Header from "../Header/Header";
import FirstPage from "../FirstPage/FirstPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        expand="lg"
        id="mainNav"
      >
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand ">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*header*/}
      <Header />
      {/* 내용 시작*/}
      <FirstPage />
      {/*두번째 페이지*/}
      <SecondPage />
      {/*  세번째 페이지*/}
      <ThirdPage />
      {/*footer*/}
      <Footer />
    </>
  );
};

export default Layout;
