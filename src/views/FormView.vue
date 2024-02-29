<script setup>
	import { ref } from 'vue';

	const title = ref('');
	const description = ref('');
	function handleSubmit() {
		fetch('/.netlify/functions/insertItemToDB', {
			method: 'post',
			body: JSON.stringify({
				title: title.value,
				description: description.value,
			}),
		})
			.then(() => console.log('Successful Call'))
			.catch((e) => console.log(e));

		// console.log(title.value, description.value);
	}
</script>

<template>
	<form @submit.prevent="handleSubmit">
		<h1></h1>
		<div>
			<label for="title">Title</label
			><input type="text" id="title" v-model="title" required />
		</div>
		<div>
			<label for="body">Body</label
			><input
				type="text"
				id="description"
				v-model="description"
				required />
		</div>
		<button type="submit">Submit</button>
	</form>
</template>

<style scoped></style>
