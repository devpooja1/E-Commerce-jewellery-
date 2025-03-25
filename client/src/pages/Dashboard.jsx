import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "../css/dashboard.css"; 
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


// Icons
import { GrDashboard } from "react-icons/gr";
import { ImInsertTemplate } from "react-icons/im";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { GrDocumentUpdate } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedUseremail = localStorage.getItem("useremail");

    if (!savedUsername) {
      navigate("/home");
    } else {
      setUsername(savedUsername);
      setUseremail(savedUseremail);
    }
  }, [navigate]);

  return (
    <>
      <div className="app-container">
        {/* Top Navbar */}
        <Navbar  variant="dark" expand="lg" fixed="top" style={{backgroundColor:"blue"}}>
          <Navbar.Brand href="#" style={{ paddingLeft: "50px", paddingTop:"5px" , height:"50px", color:"white"}}> <GrUserAdmin onClick={()=>{navigate("/dashboard/admin")}}/>
             Admin Dashboard Tiffany Céleste Jewelry
           Name: {username}. Email: {useremail}{" "}
                  {/* <Link to="resetpass">Reset-password</Link> */}
               </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: "1050px" }}>
            <Nav.Link href="#" onClick={()=>{navigate("/home")}} style={{padding:"0px", color:"black"}}>Logout</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col md={2} className="sidebar">
              <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="/dashboard"> <GrDashboard /> Dashboard </Nav.Link>
                <Nav.Link as={Link} to="insert"> <ImInsertTemplate /> Insert Item </Nav.Link>
                <Nav.Link as={Link} to="display">  <BsPcDisplayHorizontal /> Display Item </Nav.Link>
                <Nav.Link as={Link} to="update"> <GrDocumentUpdate /> Update Item </Nav.Link>
                <Nav.Link as={Link} to="search"><TbWorldSearch /> Search Item </Nav.Link>
              </Nav>
            </Col>

            {/* Main Content */}
            <Col md={10} className="content">
              <div className="content-area">
                <h3 align="center" style={{ color: "#6b4b3a", marginTop:"80px" }}>
                  Welcome to the Admin Dashboard
                </h3>
                {/* <p >
                  Name: {username}. Email: {useremail}{" "}
                  <Link to="resetpass">Reset-password</Link>
                </p> */}

                {/* Scrollable Content */}
                <div className="scrollable-content">
                  <Outlet />
                </div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;