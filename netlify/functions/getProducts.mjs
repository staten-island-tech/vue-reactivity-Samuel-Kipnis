import { connectDB } from './database/db';
import { products } from './database/schema';

export async function handler() {
	const { db, client } = connectDB();
	const data = await db.select().from(products);
	client.end();
	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
}
