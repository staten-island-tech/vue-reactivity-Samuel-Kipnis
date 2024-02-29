import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString =
	'postgres://postgres.umansxxbhipcvahiqhel:Z1Z0RvRdpqqFCMUr@aws-0-us-west-1.pooler.supabase.com:5432/postgres';

export function connectDB() {
	const client = postgres(connectionString);
	const db = drizzle(client);

	return { db, client };
}
