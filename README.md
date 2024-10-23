# Vue Rain Fall

A Vue 3 library for creating a beautiful rain effect.

## Installation

```bash
npm install vue-rain-fall
```

## Usage

```vue
<script setup>
  import { Rain } from 'vue-rain-fall';

</script>

<template>
  <Rain />
</template>

```
## Props 

You can customize the rain effect by passing props to the Rain component.

### drops-per-frame:
- type: Number
- default: 1

### fallSpeed:
- type: Number
- default: 3

### wind:
- type: Number
- default: 0

## Slots

### #drop

```vue
<script setup>
import { Rain } from 'vue-rain-fall';
</script>

<template>
  <Rain>
    <template #drop>
      <div class="drop"></div>
    </template>
  </Rain>
</template>
```




