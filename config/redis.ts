import redis, { createClient, RedisClientType } from "redis";

const client: RedisClientType = createClient();

client.on("error", (error) => {
  console.log("Redis error:", error);
});

async () => {
  try {
    await client.connect();
    console.log("redis connected");
  } catch (error) {
    console.log("Reddis failed to  connect", error);
  }
};

module.exports = client;
