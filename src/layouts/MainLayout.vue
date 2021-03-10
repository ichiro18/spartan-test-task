<template>
  <div class="container layout layout--main">
    <div class="sidebar">
      <profile />
      <main-menu class="main-menu" />
    </div>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import MainMenu from "@/components/MainMenu";

export default {
  name: 'MainLayout',
  components: {Profile, MainMenu},
};
</script>
<style lang="scss" scoped>
.layout--main {
  display: flex;
  flex: 1 0;
  padding-top: 72px;
  .sidebar {
    display: flex;
    flex: 1 0;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    max-width: min(240px, 100%);

    .main-menu {
      margin-top: 75px;
      margin-left: 72px;
    }
  }
  .content {
    width: 100%;
    flex: 1 0;
  }
}
</style>
