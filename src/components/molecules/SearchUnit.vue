<template>
  <div class="input-group mb-3">
    <div class="d-inline-block">
      <span class="input-group-text">名前</span>
    </div>
    <div class="d-inline-block">
      <input type="text" class="form-control" v-model="input" />
    </div>
    <div class="d-inline-block">
      <button class="btn btn-primary" @click="sendSearchInput">検索</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  setup(_, ctx) {
    const input = ref<string>("");
    const sendSearchInput = () => {
      console.log(input.value);
      ctx.emit("my", input.value);
    };
    const test = () => {
      ctx.emit("test", input.value);
    };
    test();
    return { sendSearchInput, input };
  },
});
</script>
