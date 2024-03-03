import { connectDB } from './database/db';
import { products } from './database/schema';

export async function handler(event) {
	id = JSON.parse(event.body).id;
	console.log(id);
	const { db, client } = connectDB();
	const data = await db.select({ id: id }).from(products);
	console.log(data);
	client.end();
	return {
		body: data,
		statusCode: 200,
	};
}
