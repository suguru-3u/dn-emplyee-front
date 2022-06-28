<template>
  <h2 class="text-left">{{ heading }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["heading"],
});
</script>
