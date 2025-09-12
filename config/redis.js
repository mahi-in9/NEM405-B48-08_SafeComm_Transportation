const redis = require("redis");

const client = redis.createClient();

client.on("error", (err) => {
  console.log("Redis error:", err);
})(async () => {
  await client.connect();
  console.log("redis connected");
});

module.exports = client;
