<template>
  <component :is="layout"/>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import SystemLayout from '@/layouts/SystemLayout';

const DEFAULT_LAYOUT = 'main';

export default {
  name: 'App',
  data() {
    return {
      layouts: {
        main: MainLayout,
        system: SystemLayout,
      },
    };
  },
  computed: {
    layout() {
      return this.layouts[this.$route.meta.layout || DEFAULT_LAYOUT];
    },
  },
};
</script>
