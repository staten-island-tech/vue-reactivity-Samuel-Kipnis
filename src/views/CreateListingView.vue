<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const title = ref("");
const description = ref("");
const price = ref(0);
const image = ref("");

function handleSubmit() {
  fetch("/.netlify/functions/insertItemToDB", {
    method: "post",
    body: JSON.stringify({
      title: title.value,
      description: description.value,
      price: price.value,
      image: image.value,
    }),
  })
    .then(() => console.log("Successful Call"))
    .then(() => setTimeout(() => router.push("/"), 2000))
    .catch((e) => console.log(e));
}
</script>

<template>
  <div class="w-full p-6 bg-white rounded-lg shadow-md my-2">
    <h1 class="text-2xl font-bold mb-4">Create Listing</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title:</label
        >
        <input
          type="text"
          id="title"
          name="title"
          v-model="title"
          required
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description:</label
        >
        <textarea
          id="description"
          name="description"
          v-model="description"
          rows="4"
          required
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Price:</label
        >
        <input
          type="number"
          id="price"
          name="price"
          v-model="price"
          required
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Image URL (optional):</label
        >
        <input
          type="text"
          id="image"
          name="image"
          v-model="image"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Create Listing
      </button>
    </form>
  </div>
</template>

<style scoped></style>
