import { text, pgTable } from 'drizzle-orm/pg-core';

export const names = pgTable('names', {
	name: text('name').notNull(),
});
