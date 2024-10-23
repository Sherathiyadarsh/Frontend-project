import React, { Children } from 'react'
import ANavbar from './ANavbar'
import { Col, Row } from 'react-bootstrap'
import ASidebar from './ASidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <ANavbar />
            <Row>
                <Col xs={3}><ASidebar /></Col>
                <Col><Outlet/></Col>
            </Row>
        </>
    )
}

export default AdminLayout
