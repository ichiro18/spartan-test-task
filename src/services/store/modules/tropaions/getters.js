import { groupBy } from 'lodash';

export default {
  years: (state) => {
    return [...new Set(state.trophies.map(item => item.badge_year))];
  },
  fullFeaturedTrophies: (state) => {
    let res = {};
    if (state.trophies.length) {
      Object.entries(groupBy(state.trophies, 'badge_year')).map(([year, categories]) => {
        res[year] = groupBy(categories, 'badge_category');
      });
    }
    return res;
  },
  trophiesByYear: (state) => {
    let res = {};
    if (state.trophies.length) {
      res = groupBy(state.trophies, 'badge_year');
    }
    return res;
  },
}
