import { createRouter, createWebHistory } from 'vue-router';
import ListingView from '../views/ListingView.vue';
import CreateListingView from '../views/CreateListingView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ListingView,
		},
		{
			path: '/form',
			name: 'form',
			component: CreateListingView,
		},
	],
});

export default router;
