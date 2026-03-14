import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GridToggler from './components/sections/GridToggler'

function Home() {
    return (
        <>
            <Header />
            <GridToggler />
            <Footer />
        </>
    )
}

export default Home