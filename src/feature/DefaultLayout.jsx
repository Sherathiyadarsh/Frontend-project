import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'
import ContaxtData from './ContaxtData'


const DefaultLayout = ({ children }) => {
    return (
        <>
            <ContaxtData>
                <Header />
                <Container>
                    {children}
                </Container>
            </ContaxtData> 
        </>
    )
}

export default DefaultLayout
