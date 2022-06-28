<template>
  <div>
    <h1>編集画面</h1>
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">名前</label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control-plaintext"
          id="staticEmail"
          v-model="state.emplyeeInfo.name"
        />
      </div>
    </div>
    <!-- カレンダー対応 -->
    <div class="mb-3 row">
      <label for="Password" class="col-sm-2 col-form-label">生年月日</label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control-plaintext"
          v-model="state.emplyeeInfo.age"
        />
      </div>
    </div>

    <div class="justify-content-center">
      <button type="submit" class="btn btn-primary mb-3">確認</button>
      <!-- 一覧画面に戻るボタンのコンポーネントを作成する -->
      <ButtonB label="戻る" href="/" @click="() => $router.push('/')" />
    </div>
    <div>{{ this.$route.params.id }}</div>
  </div>
</template>

<script lang="ts">
// 遷移した際にstoreから該当の情報を取得する
// → OK
// 取得した情報を画面に表示させる
// → OK
// 更新作業を行えるようにする
// → atomicデザインを復習する
// → 画面に更新する情報を表示させる
// → バリデーションチェックを行う
// → 一覧画面に遷移する

import ButtonB from "@/components/ButtonA.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { key } from "@/store/store";

type emplyeeInfo = {
  id: string;
  name: string;
  age: number;
};

type state = {
  emplyeeInfo: emplyeeInfo;
};

// refとactiveの概念を理解する
// Vueのライフサイクルを復習する
// リダイレクトした際の挙動を調査する
export default {
  components: {
    ButtonB,
  },
  setup() {
    // ログイン時に社員情報をAPIから取得
    const store = useStore(key);
    const route = useRoute();
    const emplyeeId: any = route.params.id;

    const getEmplyeeInfos = async () => {
      // action を呼び出す場合
      await store.dispatch("increment");
    };
    const state = reactive<state>({
      emplyeeInfo: store.state.emplyeeInfos[emplyeeId],
    });
    getEmplyeeInfos().then(() => {
      state.emplyeeInfo = store.state.emplyeeInfos[emplyeeId];
    });

    return { state };
  },
};
</script>
