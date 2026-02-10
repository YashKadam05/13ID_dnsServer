import React,{useEffect} from 'react'
import './home.css'
import axios from 'axios'

export default function Home(props) {

    useEffect(()=>{
        axios.post("http://localhost:3000/rc")
        .then(res=>{
            console.log(res.data)
            props.setfirst(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])


    const handleSubmit=(event)=>{
        console.log(event.target.domain.value);
        axios.post("http://localhost:3000/dc",[event.target.domain.value])
        .then(alert(event.target.domain.value))
        .catch(err=>console.log(err))
        event.preventDefault();
    }


    return (
        <>
            <div className="heroSection" id='home'>

                <div className="heading">
                    <p id="cap">Search, Cache, Provide</p>
                    <h1>13id dns server</h1>
                    <p>It's a server which runs 24/7, used by multiple browsers to get ip address of any searched domain.</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="enter any domain name." name="domain"/>
                        <button type='Submit'>Search</button>
                    </form>
                </div>

            </div>
        </>
    )
}
