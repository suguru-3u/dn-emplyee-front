<template>
  <div>
    <IndexA @my="handleEvent" @test="test" :emplyeeInfos="emplyeeInfos" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";
import IndexA from "@/components/templates/IndexA.vue";
import { useStore } from "vuex";
import { key } from "@/store/store";

type emplyeeInfo = {
  id: string;
  name: string;
  age: number;
};

type state = {
  emplyeeInfos: emplyeeInfo[];
};

export default defineComponent({
  components: {
    IndexA,
  },

  setup() {
    // 一覧画面に表示される社員情報が格納されている変数
    const state = reactive<state>({
      emplyeeInfos: [],
    });

    // 社員情報の変更を検知
    const emplyeeInfos = computed(() => state.emplyeeInfos);

    // ログイン時に社員情報をAPIから取得
    const store = useStore(key);
    const getEmplyeeInfos = async () => {
      // action を呼び出す場合
      await store.dispatch("increment");
    };
    getEmplyeeInfos().then(() => {
      state.emplyeeInfos = store.state.emplyeeInfos;
    });

    // 画面表示初期の社員情報取得処理
    const test = () => {
      state.emplyeeInfos = store.state.emplyeeInfos;
    };

    // 検索ボタンをクリックした際の検索処理
    const handleEvent = (value: string) => {
      const result = store.state.emplyeeInfos.filter((emplyeeInfoa) => {
        if (emplyeeInfoa.name === value) return emplyeeInfoa;
      });
      state.emplyeeInfos = result;
    };

    return { emplyeeInfos, handleEvent, getEmplyeeInfos, test };
  },
});
</script>
