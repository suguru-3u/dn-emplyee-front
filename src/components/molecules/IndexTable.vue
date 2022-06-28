<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>名前</th>
          <th>年齢</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emplyeeInfo in emplyeeInfos" :key="emplyeeInfo.id">
          <td>{{ emplyeeInfo.id }}</td>
          <td>{{ emplyeeInfo.name }}</td>
          <td>{{ emplyeeInfo.age }}</td>
          <td>
            <router-link
              :to="{ name: 'emplyeeInfo', params: { id: emplyeeInfo.id } }"
              >Go to home</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import EditButton from "@/components/atoms/EditButton.vue";

export default defineComponent({
  props: ["emplyeeInfos"],
});
</script>
