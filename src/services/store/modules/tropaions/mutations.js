export default {
  fillTrophies(state, payload) {
    state.trophies = Array.from(payload);
  }
}
