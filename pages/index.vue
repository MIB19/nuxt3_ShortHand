<template>
  <HomePage />
</template>
<script setup>
import { onMounted } from "vue";
const { data: post } = await useFetch("https://chain-api.ternaknesia.com");

onMounted(async () => {
  console.log(await post.value);
});
</script>
