<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goHome() {
  // programmatic navigation example
  router.push('/')
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Testing</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <p>Current route path: <strong>{{ route.path }}</strong></p>

    <div style="text-align:center; margin-top:1rem">
      <button @click="goHome">Go to / (home)</button>
    </div>
  </div>
</template>