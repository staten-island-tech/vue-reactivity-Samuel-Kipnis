import { products } from './schema.js';
import { connectDB } from './db.js';

async function insert(title, description) {
	const { db, client } = connectDB();
	console.log(title, description);
	await db
		.insert(products)
		.values({ title: title, description: description });

	client.end();
}

insert('Big Mac', 'It is burger');
