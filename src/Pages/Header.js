import React, { useState } from 'react'
import { Navbar, Container,Button } from 'react-bootstrap'

const Header = () => {

    return (
        <>
            {/* <Header /> */}
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home"  className="font-face-gm" style={{color:'#657F1E'}} >LOOTS T0ADZ</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="font-face-gm" style={{color:'#657F1E'}}>
                            WHITEPAPER 
                        </Navbar.Text>
                        <Button className="btn-color">Connect to Wallet</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header