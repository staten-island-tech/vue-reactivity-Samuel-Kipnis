<template>
	<form @submit.prevent="handleSubmit">
		<div>
			<label for="title">Title</label
			><input type="text" id="title" :value="title" required />
		</div>
		<div>
			<label for="body">Body</label
			><input type="text" id="body" :value="description" required />
		</div>
		<button type="submit">Submit</button>
	</form>
</template>

<script setup>
	import { ref } from 'vue';

	const title = ref('');
	const description = ref('');

	function handleSubmit() {
		// insert(title, description);
		// router.push('/');
	}
</script>

<style scoped></style>
