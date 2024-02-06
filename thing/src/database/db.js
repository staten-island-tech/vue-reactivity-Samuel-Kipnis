import 'dotenv/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

console.log(db);

const { data, error } = await supabase.from('items').insert([
	{
		title: 'Hello',
		body: 'this is an epic item',
		author: 'sam',
		date: new Date(),
	},
]);
