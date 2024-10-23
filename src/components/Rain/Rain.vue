<script setup lang="ts">
import { useRainService } from "./utils/rain.util";
import Droplet from "@/components/Rain/Droplet.vue";

const props = defineProps({
  dropsPerFrame: {
    type: Number,
    default: 1,
  },
  fallSpeed: {
    type: Number,
    default: 1,
  },
  wind: {
    type: Number,
    default: 0,
  },
});

const rain = useRainService(props);
</script>

<template>
  <div class="rain">
    <div
      v-for="drop of rain.drops.value"
      :key="drop.key"
      class="drop"
      :style="{
        left: `${drop.position.x}px`,
        top: `${drop.position.y}px`,
        scale: `${drop.position.z / 900}`,
      }"
    >
      <slot name="drop">
        <Droplet></Droplet>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.rain {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  pointer-events: none;
}

.drop {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
</style>
