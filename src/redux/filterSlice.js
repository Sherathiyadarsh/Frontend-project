import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filterProduct: [], categoryValue: "", searchvalue: '', sortvalue: "" },
  reducers: {
    FILTER_BY_CATEGORY(state, action) {
      const { category, products } = action.payload
      if (category != '') {
        let fp = products.filter((item) => item.category == category);
        state.filterProduct = fp
        state.categoryValue = category
      }
    },
    FILTER_BY_SEARCH(state, action) {
      let { products, search } = action.payload
      if (search !== '') {
        let fp = products.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase()))
        state.filterProduct = fp;
        state.searchvalue = search;
      }
    },
    FILTER_BY_SHORT(state, action) {
      const { sort, products } = action.payload;
      state.sortvalue = sort;

      if (sort === "low") {
        state.filterProduct = [...products].sort((a, b) => a.price - b.price);
      } else if (sort === "high") {
        state.filterProduct = [...products].sort((a, b) => b.price - a.price);
      } else {
        state.filterProduct = products;
      }
    },

  },
});

export const { FILTER_BY_CATEGORY, FILTER_BY_SEARCH, FILTER_BY_SHORT } = filterSlice.actions;
export const selectFilters = (state) => state.filter.filterProduct;
export const selectCategory = (state) => state.filter.categoryValue;
export const selectSearch = (state) => state.filter.searchvalue;
export const selectSort = (state) => state.filter.sortvalue;

export default filterSlice;
