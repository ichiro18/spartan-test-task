<template>
  <div class="page page--tropaion">
    <h1 class="page__title">Your tropaion</h1>

    <div class="page__controls">
      <div class="control__status">
        <span class="status__title">Your Trophies</span>
        <span class="status__counter">
          <span class="counter__current">34</span>
          <span class="counter__total">/60</span>
        </span>
      </div>
      <div class="control__filter">
        <v-select
          :value="selectedYear"
          :options="optionsYear"
          :searchable="false"
          @input="onChangeYear"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "@/components/UI/VSelect";

export default {
  name: "TropaionPage",
  components: {
    VSelect
  },
  data() {
    return {
      selectedYear: 2020,
      optionsYear: [
        2016,
        2017,
        2018,
        2019,
        2020
      ],
    }
  },
  methods: {
    onChangeYear(event) {
      if (this.optionsYear.includes(+event) && this.selectedYear !== +event) {
        this.$router.push({ query: {year: event }}).catch(() => {});
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(val) {
        const {year} = val.query;
        if (year && this.optionsYear.includes(+year)) {
          this.selectedYear = +year;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/config/_variables.scss";

.page__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .control__status {
    .status__title {
      color: $text-primary;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      & + .status__counter {
        margin-left: 26px;
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
</style>
