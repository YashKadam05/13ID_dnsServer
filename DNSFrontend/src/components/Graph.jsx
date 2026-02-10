import React from 'react'
import './graph.css'
import graph1 from "./assets/graph1.png"

export default function Graph() {
  return (
    <>
    <div className="graphSection" id='graph'>

        <div className="heading">
            <p id="cap">Gotta_cache_em_all</p>
            <h1>how dns server works</h1>
            <p>It follows UDP protocol and by - default runs on :53 port no.</p>
        </div>
        <img src={graph1} alt=""/>

    </div>
    </>
  )
}
