<template>
  <div class="container app">
    <div class="sidebar">
      <profile />
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/profile";
export default {
  name: 'App',
  components: {Profile},
};
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  flex: 1 0;
  .sidebar {
    display: flex;
    flex: 1 0;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: min(240px, 100%);
  }
  .content {
    width: 100%;
    flex: 1 0;
  }
}
</style>
