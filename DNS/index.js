const express = require('express')
const cors = require('cors')
const dnsModel = require('./database')
const neww = require('./new.js')
const http = require('http')

const app = express()
const corsOptions = {
    origin: ["http://localhost:5173"]
}
app.use(express.json())
app.use(cors(corsOptions))


const servor = http.createServer((req, res) => {
    if (req.url === "/dt") {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alice",
            "Access-Control-Allow-Origin": "*"
        })

        // data send
        const intervalId = setInterval(() => {
            const data = JSON.stringify(neww.myAbc)
            res.write(`data: ${data}\n\n`)
        }, 2000)

        req.on("close", () => {
            console.log("Client disconnected");
        })
    }
    else {
        res.writeHead(404);
        res.end();
    }
})
servor.listen(4000, () => {
    console.log("SSE Server is running on port 4000");
})


app.post("/rc", (req, res) => {
    dnsModel.find()
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
})

app.post("/dc", (req, res) => {
    console.log(req.body[0]);
    a = neww.mySome(req.body[0])

})


app.listen(3000, () => {
    console.log("Main Server running on port 3000");
})