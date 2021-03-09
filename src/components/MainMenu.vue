<template>
  <ul class="menu">
    <li class="menu__item">
      <router-link
        class="menu__link"
        to="/">
        Home
      </router-link>
    </li>
    <li class="menu__item">
      <router-link
        class="menu__link"
        to="/events">
        Events
      </router-link>
    </li>
    <li class="menu__item">
      <router-link
        class="menu__link"
        to="/results">
        Results
      </router-link>
    </li>
    <li class="menu__item">
      <router-link
        class="menu__link"
        to="/tropaion">
        Tropaion
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainMenu"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/config/_variables.scss";

.menu {
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    color: $text-inactive;

    .menu__link {
      position: relative;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;

      &:after {
        content: '';
        display: inline-block;
        visibility: hidden;
        width: 0;
        height: 3px;
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: $text-primary;
        transition: width 300ms ease-in;
      }

      &:hover,
      &.is-active {
        color: $text-primary;

        &:after {
          width: 100%;
          visibility: visible;
        }
      }
    }

    & + .menu__item {
      margin-top: 40px;
    }
  }
}
</style>
