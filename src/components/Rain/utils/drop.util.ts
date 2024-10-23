import { nextTick, reactive, toRef, toRefs } from "vue";

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

export interface Options {
  speed?: number;
  wind?: number;
  key: number;
}

function useDrop(options: Options) {
  const state = reactive({
    position: {
      x:
        Math.random() * (screenWidth + (options.wind || 0) * screenHeight) -
        (options.wind || 0) * screenHeight,
      y: 0,
      z: Math.random() * 1000,
    },
    speed: options.speed || 1,
    wind: options.wind || 0,
    outOfBounds: false,
    key: options.key,
  });

  function nextFrame() {
    state.position.x = state.position.x + state.wind;
    state.position.y = state.position.y + state.speed;
    if (state.position.y > screenHeight || state.position.x > screenWidth) {
      state.outOfBounds = true;
    }
  }

  return {
    position: toRef(state, "position"),
    outOfBounds: toRef(state, "outOfBounds"),
    key: toRef(state, "key"),
    nextFrame,
  };
}

export default useDrop;
