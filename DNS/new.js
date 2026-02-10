const dgram = require('node:dgram')
const server = dgram.createSocket('udp4')
const dnsPacket = require('dns-packet')
const { exec } = require('child_process')
const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: ["http://localhost:5173"]
}
app.use(express.json());
app.use(cors(corsOptions))


let abc = [];
let abc2 = [];
const some = (web) => {

    exec(`nslookup ${web} 127.0.0.1`, (err, stdout, stderr) => { })
    console.log("Command: ", `nslookup ${web} 127.0.0.1`);

    server.on('message', (msg, rinfo) => {
        const incomingReq = dnsPacket.decode(msg)
        exec(`nslookup ${web}`, (err, stdout, stderr) => {
            let record = {
                "hostName": incomingReq.questions[0].name,
                "recordType": incomingReq.questions[0].type,
                "ttl": "2026-01-23T11:26:37.725+00:00".substring(0, 10),
                "data": JSON.stringify(stdout).slice(JSON.stringify(stdout).length - 24, JSON.stringify(stdout).length - 9).replaceAll(' ', '').replaceAll('\\', '').replaceAll('t', '').replaceAll('r', ''),
                "dnsClass": incomingReq.questions[0].class,
            }

            // console.log("Record: ", record);
            abc.push(record);
            if (abc.length == 5) {
                // console.log(abc);
                abc2.push(abc)
                // abc.length == 0;
            }
        })
        // console.log("Rinfo: ",rinfo)
    })

    server.on('listening', () => {
        const address = server.address()
        console.log(address.address, address.port);
    })

    server.on('error', (error) => {
        console.log("Error: ", error)
    })
}


server.bind(53, '127.0.0.1', () => { console.log("UDP Server is running on port 53") })

module.exports = { mySome: some, myAbc: abc2 }