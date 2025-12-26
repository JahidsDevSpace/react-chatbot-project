import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cart: [],

  loadCart: async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    set({ cart: response.data });
  },

  setCart: (newCart) => set({ cart: newCart }),
}));

export default useCartStore;
