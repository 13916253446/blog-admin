<template>
  <div class="flex absolute-view">
    <left-menu></left-menu>
    <router-view class="flex-full"></router-view>
  </div>
</template>

<script>
import leftMenu from '@/components/left-menu.vue';
export default {
  name: 'Main',
  components: {
    leftMenu
  }
};
</script>

