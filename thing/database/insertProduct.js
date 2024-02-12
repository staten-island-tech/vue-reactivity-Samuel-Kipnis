import { products } from './schema.js';
import { connectDB } from './db.js';

export async function insert(title, description) {
	const { db, client } = connectDB();
	await db
		.insert(products)
		.values({ title: title, description: description });

	console.log(await db.select().from(products));
	client.end();
}

// insert('Big Mac', 'It is burger');
