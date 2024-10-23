<script setup lang="ts">
import Rain from "@/components/Rain/Rain.vue";
import IconDrop from "@/components/icons/IconDrop.vue";
</script>

<template>
  <div>
    <Rain :drops-per-frame="1" :fall-speed="3" :wind="1">
      <template #drop>
        <IconDrop class="drop-icon"></IconDrop>
      </template>
    </Rain>
  </div>
</template>

<style scoped>
.drop-icon {
  color: aqua;
  width: 7px;
}
</style>
