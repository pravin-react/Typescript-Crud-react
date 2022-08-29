import React from 'react';
import CreateNote from './Crud/Notes/CreateNote';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from './Crud/Notes/Notes';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>TypeScript CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    
                    <><Link to="/register">
                      <Button variant="info" style={{ marginRight: "10px" }}>Register</Button>
                    </Link><Link to="/login">
                        <Button variant="outline-info" style={{ marginRight: "10px" }}>Login</Button>
                      </Link></>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
          <Routes>
          <Route path="/add-note" element={<CreateNote />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
