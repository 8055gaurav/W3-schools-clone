import React , {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo2 from "../../assets/logo.svg"
import "./Header.css";
import { useNavigate } from "react-router-dom";


const Header = () => {
  // State to manage the active NavDropdown item
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  // Function to handle item selection
  const handleSelect = (eventKey) => {
    setActiveItem(eventKey);
  };
  return (
    <header className="header" >
      <Navbar expand="lg" className="bg-body-tertiary"  style={{backgroundColor : "white",position: 'fixed', width: '100%'}}>
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <div className="logo">
            <img className="logo-img" src={logo2} alt="logo"></img>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              <NavDropdown title="Tutorial" id="navbarScrollingDropdown"  active={activeItem ==='tutorial'} onSelect={handleSelect}>
                <NavDropdown.Item href="#action3">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Exercises" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Get Certtified" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="search" style={{backgroundColor : "#04AA6D"  , color :"white"}}>
                Search
              </Button>
              <button style={{backgroundColor : "#04AA6D"  , color :"white"}} onClick={()=>navigate('/sign-up')}>
                Sign UP
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    
  );
};

export default Header;
