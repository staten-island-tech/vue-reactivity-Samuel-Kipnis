<script setup>
import SidebarCartVue from "@/components/SidebarCart.vue";
import { onBeforeMount, ref } from "vue";
import { RouterLink } from "vue-router";

import SidebarCart from "../components/SidebarCart.vue";

const products = ref([]);
const selected = ref([]);

async function getProducts() {
  const response = await fetch("/.netlify/functions/getProducts");
  const data = await response.json();

  products.value = data;
}
getProducts();
</script>

<style scoped></style>
<template>
  <SidebarCart :items="selected" :key="selected.length" />
  <div class="w-full mx-auto my-3">
    <h1 class="text-4xl text-center my-5">All Listings</h1>
    <div class="w-full flex align-middle justify-center my-3">
      <RouterLink
        to="/form"
        class="text-2xl text-center block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-1/6"
        >Create Listing</RouterLink
      >
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Product 1 -->
      <div
        class="bg-white shadow-md rounded-lg"
        v-for="product in products"
        v-bind:key="Math.floor(Math.random() * 100000) * product.price"
      >
        <img
          :src="product.image"
          alt="Product Image N/A"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-gray-700 mb-2">
            {{ product.description }}
          </p>
          <p class="text-gray-700 font-semibold">${{ product.price }}</p>
          <button
            class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            @click="selected.push(product)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
