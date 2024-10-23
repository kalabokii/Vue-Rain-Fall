import { onMounted, reactive, ref, toRef } from "vue";
import useDrop from "@/components/Rain/utils/drop.util";

interface Options {
  fallSpeed?: number;
  wind?: number;
  dropsPerFrame?: number;
}

export function useRainService(options: Options) {
  const state = reactive<any>({
    drops: [],
    wind: options.wind || 0.1,
    fallSpeed: options.fallSpeed || 3,
    dropsPerFrame: options.dropsPerFrame || 1,
  });

  let dropThisFrame: number = 0;

  let id = 0;

  function rainNextFrame() {
    state.drops = state.drops.filter((drop: any) => !drop.outOfBounds);
    dropThisFrame += state.dropsPerFrame;

    while (dropThisFrame > 0) {
      const drop = useDrop({
        speed: state.fallSpeed,
        wind: state.wind,
        key: id++,
      });
      state.drops.push(drop);
      dropThisFrame--;
    }

    for (const drop of state.drops) {
      drop.nextFrame();
    }

    requestAnimationFrame(rainNextFrame);
  }

  onMounted(() => {
    rainNextFrame();
  });

  return {
    drops: toRef(state, "drops"),
    nextFrame: rainNextFrame,
  };
}
