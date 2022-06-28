// store.ts
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import axios from "axios";

type emplyeeInfo = {
  id: string;
  name: string;
  age: number;
};

// ストアのステートに対して型を定義します
export interface State {
  emplyeeInfos: emplyeeInfo[];
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    emplyeeInfos: [],
  },
  mutations: {
    addEmplyeeInfo: (state, data) => {
      state.emplyeeInfos = data.emplyeeInfos;
    },
  },
  actions: {
    increment: async ({ commit }) => {
      try {
        console.log("バックエンドから社員情報のデータ取得開始");
        const { data } = await axios.request<State>({
          method: "GET",
          url: "http://localhost:3000/emplyee",
        });
        commit("addEmplyeeInfo", data);
        console.log("バックエンドから社員情報のデータ取得終了");
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getEmplyeeInfos: (state) => {
      return state.emplyeeInfos;
    },
  },
});
