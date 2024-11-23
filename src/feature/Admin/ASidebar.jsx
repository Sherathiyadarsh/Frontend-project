import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const ASidebar = () => {
    const links = [
        { link: NavLink, to: '/admin/dash', name: 'Dashboard' },
        { link: NavLink, to: '/admin/add', name: 'Add Product' },
        { link: NavLink, to: '/admin/view', name: 'View Product' }
    ]
    return (
        <div>
            {/* <h3 className='bg-warning'>Admin sidebar</h3> */}
            <Nav defaultActiveKey="/home" className="flex-column">
                {links.map((item, i) => <Nav.Link key={i} as={item.link} to={item.to}
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "black" : "",
                            // backgroundColor: isActive ? "gray" : "",
                            borderRadius: isActive ? "10px" : ""
                        };
                    }}
                >{item.name}</Nav.Link>)}
            </Nav>
        </div>
    )
}

export default ASidebar
