import { connectDB } from './database/db';
import { products } from './database/schema';

export async function handler() {
	const { db, client } = connectDB();
	const data = await db.select().from(products);
	console.log(data);
	client.end();
	return {
		data,
		statusCode: 200,
	};
}
