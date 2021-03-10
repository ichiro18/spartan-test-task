<template>
  <div class="page page--tropaion" v-if="!loading">
    <h1 class="page__title">Your <br class="visible-xs"> tropaion</h1>

    <div class="page__controls">
      <div class="control__status">
        <span class="status__title">Your Trophies</span>
        <span class="status__counter">
          <span class="counter__current">{{ counters.earned }}</span>
          <span class="counter__total">/{{ counters.total }}</span>
        </span>
      </div>
      <div class="control__filter">
        <v-select
          :value="selectedYear"
          :options="years"
          :searchable="false"
          @input="onChangeYear"
        />
      </div>
    </div>

    <main class="page__content">
      <div class="alert" v-if="isEmpty(currentTrophies)">Not found badges</div>
      <template v-else>
        <section
        v-for="(category, name) of currentTrophies"
        :key="name"
        class="category"
      >
        <h3 class="category__title">{{ name }}</h3>
        <div class="category__badges">
          <div
            v-for="(badge, key) in category"
            :key="`${name}-${key}`"
            :class="['badge', {'is-earned': badge.earned}]"
          >
            <img
              class="badge__image"
              :src="badge.badge_icon_url"
              :alt="badge.badge_name"
              @error="replaceByDefault"
            >
            <span class="badge__name">{{ badge.badge_name }}</span>
          </div>
        </div>
      </section>
      </template>
    </main>
  </div>
</template>

<script>
import { isEmpty } from "lodash";
import VSelect from "@/components/UI/VSelect";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TropaionPage",
  components: {
    VSelect
  },
  data() {
    return {
      selectedYear: null,
      loading: false,
      isEmpty,
    }
  },
  computed: {
    ...mapGetters({
      trophies: 'tropaions/fullFeaturedTrophies',
      byYear: 'tropaions/trophiesByYear',
      years: 'tropaions/years',
    }),
    counters() {
      const res = {
        total: 0,
        earned: 0,
      }
      if (this.byYear[this.selectedYear]) {
        res.total = this.byYear[this.selectedYear].length;
        res.earned = this.byYear[this.selectedYear].filter(item => item.earned).length;
      }
      return res;
    },
    currentTrophies() {
      return this.trophies[this.selectedYear] || null
    },
  },
  methods: {
    ...mapActions({
      loadTrophies: 'tropaions/loadTrophies'
    }),
    onChangeYear(event) {
      if (this.years.includes(+event) && this.selectedYear !== +event) {
        this.$router.push({ query: {year: event }}).catch(() => {});
      }
    },
    replaceByDefault(e) {
      e.target.src = require('@/assets/images/Badge-Sprint.svg');
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(val) {
        const {year} = val.query;
        if (year) {
          this.selectedYear = +year;
        } else {
          this.selectedYear = new Date().getFullYear()
        }
      }
    }
  },
  created() {
    this.loading = true;
    this.loadTrophies()
      .finally(() => {
        this.loading = false;
      })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/config/_variables.scss";

.page--tropaion {
  .page__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .control__status {
      display: flex;
      align-items: flex-end;

      @media screen and (max-width: $sm) {
        flex-direction: column;
        align-items: flex-start;
      }

      .status__title {
        color: $text-primary;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;

        & + .status__counter {
          margin-left: 26px;

          @media screen and (max-width: $sm) {
            margin-left: 0;
          }
        }
      }

      .status__counter {
        font-weight: bold;
        font-size: 18px;
        line-height: 1.35;
        color: $text-inactive;

        .counter__current {
          color: $text-primary
        }
      }
    }
  }

  .page__content {
    display: flex;
    flex-direction: column;
    padding-bottom: 300px;

    .alert {
      color: $text-primary;
    }

    .category {
      .category__title {
        display: inline-flex;
        align-items: center;
        width: 100%;
        font-family: "Oswald", sans-serif;
        font-style: italic;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 28px;
        line-height: 1.2;
        letter-spacing: -0.05rem;
        color: $text-primary;
        border-bottom: 1px solid opacify($text-primary, 0.2);
        padding-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .category__badges {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 75px;
        grid-row-gap: 50px;

        @media screen and (min-width: $sm) and (max-width: $md) {
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 75px;
          grid-row-gap: 50px;
        }

        @media screen and (min-width: $md) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-column-gap: 100px;
          grid-row-gap: 75px;
        }

        .badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.3;

          &.is-earned {
            opacity: 1;
          }

          &__image {
            max-height: 75px;
            max-width: 75px;
            user-select: none;

            & + .badge__name {
              margin-top: 20px;
            }
          }

          &__name {
            max-height: 2rem;
            overflow: hidden;
            font-weight: bold;
            font-size: 12px;
            line-height: 1.3;
            text-align: center;
            text-overflow: ellipsis;
            text-transform: uppercase;
            color: $text-primary;
          }
        }
      }

      & + .category {
        margin-top: 60px;
      }
    }
  }
}
</style>
