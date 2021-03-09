<template>
  <div class="profile">
    <img class="profile__avatar" src="/Avatar.png" alt="avatar">
    <span class="profile__name">Someone Verylongname</span>
  </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/config/_variables.scss";

.profile {
  display: flex;
  flex: 0 0;
  align-items: center;
  width: 100%;
  max-width: 240px;

  &__avatar {
    display: block;
    max-width: 58px;
    max-height: 58px;
    border-radius: 50%;

    & + .profile__name {
      margin-left: 1rem;
    }
  }

  &__name {
    overflow: hidden;
    font-size: 2rem;
    line-height: 0.95;
    color: $text-primary;
    font-weight: 700;
    text-transform: uppercase;
    text-overflow: ellipsis;
    font-family: "Oswald", sans-serif;
    letter-spacing: -2px;
  }
}
</style>
