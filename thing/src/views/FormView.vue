<template>
	<form @submit.prevent="addPost">
		<div>
			<label for="title">Title</label
			><input type="text" id="title" :value="title" />
		</div>
		<div>
			<label for="body">Body</label
			><input type="text" id="body" :value="body" />
		</div>
		<div>
			<label for="author">Author Name</label
			><input type="text" id="author" :author="author" />
		</div>
		<button type="submit">Submit</button>
	</form>
</template>

<script setup>
	import { ref } from 'vue';
	import uuid from 'uuidv4';

	import { usePostsStore } from '../stores/posts';

	const title = ref('');
	const body = ref('');
	const author = ref('');

	function addPost() {
		const store = usePostsStore();
		const id = uuid();

		store.addPost({
			title,
			author,
			body,
			id,
		});
	}
</script>

<style scoped></style>
