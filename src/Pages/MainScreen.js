import React, { useState } from 'react'
import Header from './Header'
import Counter from './Counter'
import Stake from './Stake'
import Footer from './Footer'
import Faq from './Faq'

const MainScreen = () => {
    
    return (
        <>
            {/* <Header /> */}
            <Header/>
            <center><h1  className="font-face-gm main-color" >LOOTS TOADZ</h1></center>
            <Counter/>
            <Stake/>
            <Faq/>
            <Footer/>
           
        </>
    )
}

export default MainScreen