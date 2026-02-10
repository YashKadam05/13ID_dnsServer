import React, { useState } from 'react'
import './records.css'

export default function Records(props) {


    return (
        <>
            <div className="recordSection" id='records'>

                <div className="heading">
                    <p id="cap">Fast</p>
                    <h1>records</h1>
                    <p>All timely cached records.</p>
                    <table>
                        <thead>
                            <tr id="thead">
                                <th style={{ borderTopLeftRadius: "10px" }}>HOST NAME</th>
                                <th>TYPE</th>
                                <th>TTL (TIME TO LIVE)</th>
                                <th>DATA</th>
                                <th style={{ borderTopRightRadius: "10px" }}>DNS CLASS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                props.first.map((i,index) => (
                                    <tr key={index}>
                                        <td>{i.hostName}</td>
                                        <td>{i.recordType}</td>
                                        <td>{i.ttl.substring(0, 10)}</td>
                                        <td>{i.data}</td>
                                        <td>{i.dnsClass}</td>
                                    </tr>
                                ))
                            }
                            {
                                props.message.reverse().map((i,index) => (
                                    <tr key={index}>
                                        <td>{i.hostName}</td>
                                        <td>{i.recordType}</td>
                                        <td>{i.ttl.substring(0, 10)}</td>
                                        <td>{i.data}</td>
                                        <td>{i.dnsClass}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
