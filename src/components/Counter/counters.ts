import { reactive, toRef, toRefs } from "vue";
import { useCounter } from "@/components/Counter/counter";

export function useCounters() {
  const state = reactive<any>({
    counters: [],
  });

  function addCounter() {
    const counter = useCounter();
    state.counters.push(counter);
  }

  return {
    ...toRefs(state),
    addCounter,
  };
}
