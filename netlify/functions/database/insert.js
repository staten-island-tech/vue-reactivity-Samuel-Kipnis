import { products } from './schema.js';
import { connectDB } from './db.js';

export default async function insert(title, description) {
	const { db, client } = connectDB();
	await db
		.insert(products)
		.values({
			title: title,
			description: description,
			posted_at: new Date().toISOString().toLocaleString('zh-TW'),
		});

	// console.log(await db.select().from(products));
	client.end();
}

// insert('Big Mac', 'It is burger');
