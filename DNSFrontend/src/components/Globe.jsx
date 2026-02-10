import React from 'react'
import './globe.css'
import GGlobe from "./assets/globe.mp4"

export default function Globe() {
    return (
        <>
            <div className="GSCap1"></div>
            <div className="GSCap2"></div>

            <div className="globeSection">

                <div className="heading">
                    <p id="cap">Distributed</p>
                    <h1>13 root servers</h1>
                    <p>There are total 13 logical root name servers, geographically located in different countries.</p>
                </div>
                <div className="globeVid">
                    <video autoPlay muted loop>
                        <source src={GGlobe} type="video/mp4" />
                    </video>
                </div>

            </div>
        </>
    )
}
