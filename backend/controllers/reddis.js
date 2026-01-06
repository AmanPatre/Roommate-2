import Redis from "ioredis";

const redisClient = new Redis({
    host: "redis-19227.c277.us-east-1-3.ec2.cloud.redislabs.com",
    port: "19227",
    password: "8Y5uXIx4yqqC636FU5wjwgayNdjodE6M",

});

redisClient.on('connect', () => {
    console.log("Reddis Connected")
})


export default redisClient;