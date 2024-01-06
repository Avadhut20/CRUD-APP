import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import { ReadEmployee } from './components/Employee/ReadEmployee';
import { CreateEmployee } from './components/Employee/CreateEmployee';
import CreateProject from './components/Project/CreateProject';
import DeleteProject from './components/Project/DeleteProject';
import UpdateProject from './components/Project/UpdateProject';
import ReadProject from './components/Project/ReadProject';

const App = () => {
  return (
    <Router>
      <>
        <Navbar className="navbar navbar-dark bg-dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            CRUD APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              {/* First Dropdown */}
              <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ReadProject">
                  Read
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CreateProject">
                  Create
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/DeleteProject">
                  Delete
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/UpdateProject">
                  Update
                </NavDropdown.Item>
              </NavDropdown>

              {/* Second Dropdown */}
              <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ReadEmployee">
                  Read
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CreateEmployee">
                  Create
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/ReadEmployee" element={<ReadEmployee />} />
          <Route path="/CreateEmployee" element={<CreateEmployee />} />
          <Route path="/ReadProject" element={<ReadProject />} />
          <Route path="/CreateProject" element={<CreateProject />} />
          <Route path="/DeleteProject" element={<DeleteProject />} />
          <Route path="/UpdateProject" element={<UpdateProject />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
