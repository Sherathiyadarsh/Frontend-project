import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ANavbar = () => {
    let [username, setUsername] = useState("Guest")
    useEffect(() => {
        if (sessionStorage.getItem("mini-project") != null) {
            let obj = JSON.parse(sessionStorage.getItem("mini-project"))
            setUsername(obj.name)
        }
    }, [sessionStorage.getItem("mini-project")])

    const navigate = useNavigate()
    let handlelogout = () => {
        sessionStorage.removeItem("mini-project")
        toast.success("LoggedOut Successfully")
        navigate('/')
    }
    return (
        <>
            {/* <h1 className='bg-info'>Admin Navbar</h1> */}
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Mini-project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Welcome {username}</Nav.Link>
                            <Nav.Link onClick={handlelogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default ANavbar
