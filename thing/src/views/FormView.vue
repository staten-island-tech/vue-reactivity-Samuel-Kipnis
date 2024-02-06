<template>
	<form @submit.prevent="handleSubmit">
		<div>
			<label for="title">Title</label
			><input type="text" id="title" :value="title" required />
		</div>
		<div>
			<label for="body">Body</label
			><input type="text" id="body" :value="body" required />
		</div>
		<div>
			<label for="author">Author Name</label
			><input type="text" id="author" :author="author" required />
		</div>
		<button type="submit">Submit</button>
	</form>
</template>

<script setup>
	import { ref } from 'vue';
	import { nanoid } from 'nanoid';

	import router from '@/router';
	import { usePostsStore } from '../stores/posts';

	const title = ref('');
	const author = ref('');
	const body = ref('');

	function addPost(title, author, body, id) {
		const store = usePostsStore();
		store.addPost({
			title,
			author,
			body,
			id,
		});
	}

	function handleSubmit() {
		addPost(title, author, body, nanoid());
		router.push('/');
	}
</script>

<style scoped></style>
