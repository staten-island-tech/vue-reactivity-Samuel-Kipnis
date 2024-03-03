import { products } from './schema.js';
import { connectDB } from './db.js';

export default async function insert(title, description, price, image) {
	const { db, client } = connectDB();
	await db.insert(products).values({
		title,
		description,
		price,
		image,
	});

	// console.log(await db.select().from(products));
	client.end();
}

// insert('Big Mac', 'It is burger');
