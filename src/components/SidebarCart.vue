<script setup>
import { defineProps } from "vue";
const props = defineProps(["items"]);
const items = JSON.parse(JSON.stringify(props)).items;

let total = 0;
if (items.length > 0) items.forEach((el) => (total += el.price));
const allItemTypes = [];

const formattedItems = [];

for (let item in items) {
  if (!allItemTypes.includes(items[item].id)) allItemTypes.push(items[item].id);
}
for (let id in allItemTypes) {
  let title = "";
  let totalPrice = 0;
  let totalNum = 0;
  for (let item in items) {
    if (items[item].id === allItemTypes[id]) {
      totalPrice += items[item].price;
      title = items[item].title;
      totalNum++;
    }
  }
  //   console.log(`${title} x ${totalNum}: ${totalOfType}`);
  formattedItems.push({
    title,
    totalNum,
    totalPrice,
  });
}

console.log(formattedItems);
</script>


<template>
  <div class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
    <div class="flex justify-between items-center border-b p-4">
      <span class="text-lg font-semibold">Cart</span>
    </div>
    <div class="p-4">
      <div
        v-for="(item, key) in formattedItems"
        :key="key"
        class="flex justify-between items-center mb-4"
      >
        <span
          >{{ item.title }}: ${{ item.totalPrice / item.totalNum }} x
          {{ item.totalNum }}</span
        >
        <span></span>
      </div>
      <div class="text-right">
        <span class="text-lg font-semibold">Total: {{ total }} </span>
      </div>
    </div>
    <div class="p-4 border-t">
      <button
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        @click="console.log(items)"
      >
        test
      </button>
    </div>
  </div>
</template>