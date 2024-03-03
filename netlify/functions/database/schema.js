import { pgTable, serial, text, real } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const names = pgTable('names', {
	name: text('name').notNull(),
});

export const products = pgTable('products', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description').notNull(),
	price: real('price').notNull(),
	image: text('image'),
});
