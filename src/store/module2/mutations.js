import state from "./state";

export function changeCategoriesactive(state, payload) {
  state.active = payload[1];
}
export function chengeOpenMenu(state) {
  state.chengeOpenMenu += 1;
}
export function hiddenArrowLeft(state, payload) {
  state.hiddenArrowLeftBool = payload;
}
