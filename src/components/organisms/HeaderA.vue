<template>
  <div class="mt-5 mb-5">
    <HeadingA :heading="heading" />
    <SearchUnit @my="handleEvent" @test="test" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeadingA from "@/components/atoms/HeadingA.vue";
import SearchUnit from "@/components/molecules/SearchUnit.vue";

export default defineComponent({
  components: {
    HeadingA,
    SearchUnit,
  },
  setup(_, ctx) {
    const heading = ref<string>("一覧");
    const handleEvent = (value: string) => {
      ctx.emit("my", value);
    };
    const test = (value: string) => {
      ctx.emit("test", value);
    };
    return { heading, handleEvent, test };
  },
});
</script>
