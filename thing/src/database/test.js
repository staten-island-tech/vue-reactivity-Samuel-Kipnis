import { connectDB } from './db.js';
import { names } from './schema.js';

const { db, client } = connectDB();

await db.insert(names).values({ name: 'Andrew' });
console.log(await db.select().from(names));

client.end();
