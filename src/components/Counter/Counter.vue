<script lang="ts" setup>
import { useCounters } from "@/components/Counter/counters";

const counters: any = useCounters();
</script>

<template>
  <div>
    <button @click="counters.addCounter()">add counter</button>
  </div>
  {{ counters.counters.value }}
  <div v-for="(counter, index) in counters.counters.value" :key="index">
    <button @click="counter.increment">count {{ counter.count }}</button>
  </div>
</template>
