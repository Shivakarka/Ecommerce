import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const product = action.payload;
      const itemExist = state.find((item) => item.id === product.id);
      if (itemExist) {
        toast("Product Quantity Increased", {
          autoClose: 2000,
        });
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        toast("Added To Cart", { autoClose: 1500 });
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    decreaseitem(state, action) {
      const product = action.payload;
      const itemExist = state.find((item) => item.id === product.id);
      if (itemExist.qty === 1) {
        toast.warning("Removed from  Cart", {
          autoClose: 1500,
        });
        return state.filter((item) => item.id !== itemExist.id);
      } else {
        toast.warning("Quantity Decreased", {
          autoClose: 1500,
        });
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },
  },
});

export const { add, remove, decreaseitem } = cartSlice.actions;
export default cartSlice.reducer;
