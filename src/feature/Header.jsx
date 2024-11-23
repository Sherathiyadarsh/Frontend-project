import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataContaxt } from './ContaxtData';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';



const Header = () => {
    let data = useContext(DataContaxt)
    // console.log(data);
    const navigate = useNavigate()
    let handlelogout = () => {
        sessionStorage.removeItem("mini-project")
        toast.success("LoggedOut Successfully")
        navigate('/')
    }
    let [username, setUsername] = useState("Guest")
    useEffect(() => {
        if (sessionStorage.getItem("mini-project") != null) {
            let obj = JSON.parse(sessionStorage.getItem("mini-project"))
            setUsername(obj.name)
        }
    }, [sessionStorage.getItem("mini-project")])
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">Mini-Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "white" : "",
                                    // backgroundColor: isActive ? "white" : "",
                                    borderRadius: isActive ? "10px" : ""
                                };
                            }}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/products' style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "white" : "",
                                    // backgroundColor: isActive ? "white" : "",
                                    borderRadius: isActive ? "10px" : ""
                                };
                            }} >Products </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/cart"> <FaShoppingCart size={30} />
                            <span class="badge rounded-pill text-bg-danger">{data.cart.length}</span>
                        </Nav.Link>
                        <ShowOnLogout>
                            <Nav.Link as={NavLink} to='/login' style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "white" : "",
                                    // backgroundColor: isActive ? "white" : "",
                                    borderRadius: isActive ? "10px" : ""
                                };
                            }}>Login</Nav.Link>
                            <Nav.Link as={NavLink} to='/register' style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "white" : "",
                                    // backgroundColor: isActive ? "white" : "",
                                    borderRadius: isActive ? "10px" : ""
                                };
                            }}>Register</Nav.Link>
                        </ShowOnLogout>
                        <ShowOnLogin>
                            <Nav.Link href="#home">Welcome {username}</Nav.Link>
                            <Nav.Link onClick={handlelogout}>Logout</Nav.Link>
                        </ShowOnLogin>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header



