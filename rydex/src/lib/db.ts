import mongoose from "mongoose"

import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

console.log("DNS Servers:", dns.getServers());

const mongodbUrl=process.env.MONGODB_URI
   console.log("MongoDB URI:", mongodbUrl);
if(!mongodbUrl){
    throw new Error("db url not found!")
}

let cached=global.mongooseConn
if(!cached){
    cached=global.mongooseConn={conn:null,promise:null}
}

const connectDb = async () => {
    console.log("Testing SRV lookup...");

    try {
        const records = await dns.promises.resolveSrv(
            "_mongodb._tcp.cluster0.zdom8py.mongodb.net"
        );

        console.log("SRV Lookup Success:", records);
    } catch (err) {
        console.error("SRV Lookup Failed:");
        console.error(err);
    }

    return mongoose.connect(mongodbUrl);
};

export default connectDb