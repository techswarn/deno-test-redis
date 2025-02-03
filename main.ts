import { createClient } from "npm:redis";
import "jsr:@std/dotenv/load";

// Access the environment variables
const redisUrl = Deno.env.get("REDIS_URL");
const redisPassword = Deno.env.get("REDIS_PASSWORD");

console.log(`Redis URL: ${redisUrl}`);
console.log(`Redis Password: ${redisPassword}`);

const client = await createClient({
                url: `${redisUrl}`
              }).on('error', err => console.log('Redis Client Error', err)).connect();

await client.set('foo', 'bar');
const value = await client.get('key');
console.log(value)
await client.disconnect();

