const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/YashDB')
    .then(() => console.log("MongoDb Connected"))
    .catch(err => console.log(err))

const dnsSchema = new mongoose.Schema({
    hostName: {
        type: String
    },
    recordType: {
        type: String
    },
    ttl: {
        type: Date
    },
    data: {
        type: String
    },
    dnsClass: {
        type: String
    },
})

module.exports = mongoose.model("dnsModel", dnsSchema, "dnsRecords")
