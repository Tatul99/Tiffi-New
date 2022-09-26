// export function someMutation(/* state */) {}
export function chengeId(state, payload) {
  state.id = payload[0];
  state.categoriesType = payload[1];
}
export function chengeActiveMenu(state, payload) {
  state.activeMenuItem = payload;
}
export function chengeMenuType(state, payload) {
  console.log(payload);
  state.categoriesId = 1;
  state.type = payload;
}

export function chengeMenuActiveType(state, payload) {
  state.categoriesType = "";
}

export function chengMenuCategoriesPageType(state, payload) {
  state.categoriesType = payload;
}
export function changeCategoriesId(state, payload) {
  state.categoriesId = payload[0];
}
export function chengeSerchedText(state, payload) {
  state.SearchedText = payload;
}
export function chengCategoriesPageType(state, payload) {
  console.log(payload[2]);
  state.categoriesType = payload[0];
  state.categoriesParentId = payload[1];
  state.categoriesTitle = payload[2];
  if (payload[3]) {
    state.subCategory = true;
  } else state.subCategory = false;
}
export function changeProductsArr(state, payload) {
  state.productsArr = payload;
}
