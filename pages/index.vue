<template>
  <LoginPage />
</template>
<!-- <script setup>
import { onMounted } from "vue";
const { $db, $getDocs, $collection } = await useNuxtApp();
const querySnapshot = await $getDocs($collection(await $db, "chats/217/chat"));

onMounted(async () => {
  console.log(
    await querySnapshot.docs[0]._document.data.value.mapValue.fields.message
      .stringValue
  );
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
</script> -->
