"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
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
//# sourceMappingURL=redis.js.map
