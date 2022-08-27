<template>
  <div
    class="w-full min-h-screen flex justify-center items-center flex-col bg-gradient-to-br from-sky-300 to-sky-700"
  >
    <div
      class="bg-transparent w-104 h-104 rounded-md shadow-calm flex items-center justify-center"
    >
      <div
        class="h-92 w-92 flex flex-col bg-gray-800 p-4 pt-6 pb-8 items-center rounded"
      >
        <label class="text-white text-3xl font-semibold">Nuxt3 Chat</label>
        <div
          class="w-full flex flex-col h-full items-center justify-center gap-6"
        >
          <div class="w-full flex flex-col items-start">
            <label
              for="website-admin"
              class="block mb-2 text-sm font-medium text-gray-100"
              >Username</label
            >
            <div class="flex w-full">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-r-0 border-gray-300 rounded-l"
              >
                @
              </span>
              <input
                id="website-admin"
                v-model="userName"
                type="text"
                class="rounded-none rounded-r bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                placeholder="username"
              />
            </div>
          </div>
          <div class="w-full flex flex-col items-start">
            <label
              for="website-admin"
              class="block mb-2 text-sm font-medium text-gray-100"
              >Password</label
            >
            <div class="flex w-full">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-r-0 border-gray-300 rounded-l"
              >
                .
              </span>
              <input
                id="website-admin"
                v-model="pass"
                type="password"
                class="rounded-none rounded-r bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
          </div>
        </div>
        <button
          v-if="!loading"
          class="w-full bg-gray-100 hover:bg-gray-400 hover:scale-105 text-black py-2 text-lg font-semibold rounded-full"
          @click="check"
        >
          Login
        </button>
        <button
          v-else
          class="w-full bg-gray-100 hover:bg-gray-400 hover:scale-105 text-black py-2 text-lg font-semibold rounded-full"
        >
          <FontAwesomeIcon :icon="faSpinner" spin />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const router = useRouter();
const loading = ref(false);
const pass = ref("");
const userName = ref("");

function check() {
  loading.value = true;
  if (pass.value === "admin" && userName.value === "admin") {
    router.push({
      path: "/admin",
    });
  }
}
</script>
