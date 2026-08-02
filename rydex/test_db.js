import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8"]);

console.log("DNS Servers:", dns.getServers());

try {
    const records = await dns.promises.resolveSrv(
        "_mongodb._tcp.cluster0.zdom8py.mongodb.net"
    );

    console.log("SRV Records:", records);
} catch (err) {
    console.error("SRV ERROR:", err);
}

try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");
} catch (err) {
    console.error("❌ MongoDB Error");
    console.error(err);
}