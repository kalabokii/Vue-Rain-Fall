import { reactive, toRef } from "vue";

export function useCounter() {
  const state = reactive({
    count: 0,
  });

  function increment() {
    state.count += 1;
  }

  return {
    count: toRef(state, "count"),
    increment,
  };
}
