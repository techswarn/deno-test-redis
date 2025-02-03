import { createClient } from "npm:redis";

// filepath: /path/to/app.ts
import { config } from "./deps.ts";

// Load environment variables
const env = config();

// Access the environment variables
const redisUrl = env.REDIS_URL;
const redisPassword = env.REDIS_PASSWORD;

console.log(`Redis URL: ${redisUrl}`);
console.log(`Redis Password: ${redisPassword}`);

const client = await createClient({
                url: `${redisUrl}`
              }).on('error', err => console.log('Redis Client Error', err)).connect();

await client.set('foo', 'bar');
const value = await client.get('key');
console.log(value)
await client.disconnect();

