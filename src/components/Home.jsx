import React from 'react';
import {Redirect} from 'react-router-dom'

function Home() {
    return <Redirect to="/About" />

    return (
        <h1>Homeにいます！</h1>
    )
}

export default Home;