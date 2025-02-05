import { createClient } from "npm:redis";
import "jsr:@std/dotenv/load";

// Access the environment variables
const redisUrl = Deno.env.get("REDIS_URL");
const redisPassword = Deno.env.get("REDIS_PASSWORD");

console.log(`Redis URL: ${redisUrl}`);
console.log(`Redis Password: ${redisPassword}`);

const client = await createClient({url: `${redisUrl}`})

const connect = async () => {
  try {
    await client.connect();
    console.info("Redis connection established");
    await client.set('foo', 'bar');
    const value = await client.get('foo');
    console.log(value)
    await client.disconnect();
    return value
  } catch (error) {
    console.error("Failed to connect to Redis", error);
    console.warn("continuing without Redis");
    await client.disconnect();
  }
}

Deno.serve({ port: 8080, hostname: "0.0.0.0" }, async (_req) => {
  const value = await connect()
  return new Response(value);
});


