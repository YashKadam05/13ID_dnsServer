import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Records from './components/Records'
import Graph from './components/Graph'
import Globe from './components/Globe'
import Footer from './components/Footer'
import PixelBlast from './components/PixelBlast';


function App() {
  const [first, setfirst] = useState([])

  const [message2, setMessage2] = useState([])
  const [message, setMessage] = useState([])
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:4000/dt")

    eventSource.onmessage = (event) => {
      let parsed = JSON.parse(event.data)[0];
      if (parsed == undefined) {
        parsed = []
        console.log(parsed);
        setMessage(parsed)
      }
      else {
        console.log(parsed);
        setMessage(parsed)
      }
    }
    eventSource.onerror = (err) => {
      console.log("SSR error: ", err);
      eventSource.close();
    }
    return () => {
      eventSource.CLOSED()
    }
  }, [])


  return (
    <>
      <Navbar />

      <div style={{ width: '100%', height: '600px', position: 'absolute', opacity: "30%" }}>
        <PixelBlast
          color="grey"
        />
      </div>

      <div style={{ position: "relative"}}>
        <Home first={first} setfirst={setfirst} />
      </div>

      <Records first={first} setfirst={setfirst} message={message} setMessage={setMessage} message2={message2} setMessage2={setMessage2} />
      <Graph />
      <Globe />
      <Footer />
    </>
  )
}

export default App
