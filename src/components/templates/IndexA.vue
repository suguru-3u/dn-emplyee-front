<template>
  <div class="container">
    <HeadingA @my="handleEvent" @test="test" />
    <IndexTable :emplyeeInfos="emplyeeInfos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeadingA from "@/components/organisms/HeaderA.vue";
import IndexTable from "@/components/molecules/IndexTable.vue";

export default defineComponent({
  components: {
    HeadingA,
    IndexTable,
  },
  props: ["emplyeeInfos"],
  setup(_, ctx) {
    const handleEvent = (value: string) => {
      ctx.emit("my", value);
    };
    const test = (value: string) => {
      ctx.emit("test", value);
    };
    return { handleEvent, test };
  },
});
</script>
