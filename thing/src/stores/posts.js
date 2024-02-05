import { defineStore } from 'pinia';
export const usePostsStore = defineStore('todos', {
	state: () => ({
		posts: [],
	}),
	getters: {
		getAllPosts() {
			return this.posts;
		},
	},
	actions: {
		getPostById(id) {
			return this.posts.filter((postID) => postID === id)[0];
		},
		addPost(post) {
			this.posts.unshift(post);
		},
	},
});
