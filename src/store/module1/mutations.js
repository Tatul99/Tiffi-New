// export function someMutation(/* state */) {}
export function chengeId(state, payload) {
  state.id = payload;
}
export function chengeMenuType(state, payload) {
  state.categoriesId = 1;
  state.type = payload;
  state.active = 0;
}
export function changeCategoriesId(state, payload) {
  state.categoriesId = payload[0];
  state.active = payload[1];
}
export function chengeSerchedText(state, payload) {
  state.SearchedText = payload;
}
export function chengCategoriesPageType(state, payload) {
  state.categoriesType = payload[0];
  state.categoriesParentId = payload[1];
  state.categoriesTitle = payload[2];
}
export function changeProductsArr(state, payload) {
  state.productsArr = payload;
}
