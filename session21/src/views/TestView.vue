<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => String(route.params.id ?? ''))
</script>

<template>
  <main style="padding: 1rem;">
    <h1>/test/:id</h1>
    <p>
      ID param: <strong>{{ id }}</strong>
    </p>
  </main>
</template>
