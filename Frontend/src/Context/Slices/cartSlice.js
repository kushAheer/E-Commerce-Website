import { createSlice } from '@reduxjs/toolkit';


const loadState = () => {
  try {
    const cart = localStorage.getItem('cart');
    if (cart === null) {
      return { items: [], totalQty: 0, totalPrice: 0 };
    }
    return JSON.parse(cart);
  } catch (err) {
    return { items: [], totalQty: 0, totalPrice: 0 };
  }
};


const saveState = (state) => {
  try {
    const cart = JSON.stringify(state);
    localStorage.setItem('cart', cart);
  } catch (err) {
    console.error('Failed to save state to localStorage:');
  }
};


const initialState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
    
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.price += newItem.price * newItem.quantity;
      } else {
        state.items.push({ ...newItem, totalPrice: Number(newItem.price * newItem.quantity), });
      }
      state.totalQty = state.items.reduce((total, item) => total + Number(item.quantity), 0);
      state.totalPrice = state.items.reduce((total, item) => total + Number(item.totalPrice), 0);

      saveState(state); 
    },

    removeFromCart: (state, action) => {
      // const id = action.payload;
      // const itemToRemove = state.items.find(item => item.id == id);

      // if (itemToRemove) {
      //   state.items = state.items.filter(item => item.id !== id);
      //   state.totalQty -= itemToRemove.quantity;
      //   state.totalPrice -= itemToRemove.totalPrice;
      // }
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);

      state.totalQty = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);

      saveState(state);
    },

    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);

    //   if (item) {
    //     const newQuantity = Number(quantity);
    //     const oldQuantity = Number(item.quantity);
    //     const quantityDifference = newQuantity - oldQuantity;

    //     state.totalQty += quantityDifference;
    //     state.totalPrice += quantityDifference * item.price;
    //     item.quantity = newQuantity;
    //     item.totalPrice = item.price * newQuantity;
    // }
    if (item) {
      item.quantity = quantity;
      item.totalPrice = item.price * quantity;
    }

    state.totalQty = state.items.reduce((total, item) => total + item.quantity, 0);
    state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
      saveState(state); 
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalPrice = 0;
      saveState(state);
    },
  },
});


export const { addToCart, removeFromCart, updateCartQuantity ,clearCart } = cartSlice.actions;


export default cartSlice.reducer;
