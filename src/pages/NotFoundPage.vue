<template>
  <div class="page page--404">
    <h1 class="page__title">404</h1>
    <h3>Not found</h3>
    <router-link to="/" exact>Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: "EventsPage",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/config/_variables.scss";

.page--404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: $text-primary;

  .page__title {
    transform-origin: center;
  }

  a {
    text-decoration: underline;
  }
}
</style>
