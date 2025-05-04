import { writable, derived } from 'svelte/store';

// Initialize the cart store
const createCartStore = () => {
  // Check if we have cart data in localStorage
  const storedCart = typeof localStorage !== 'undefined' ? localStorage.getItem('cart') : null;
  const initialCart = storedCart ? JSON.parse(storedCart) : [];

  const { subscribe, set, update } = writable(initialCart);

  return {
    subscribe,

    // Add an item to the cart
    addItem: (product, quantity = 1, selectedSize = null) => {
      update(items => {
        // Check if this product (with the same size if applicable) is already in the cart
        const existingItemIndex = items.findIndex(
          item => item.id === product.id &&
          (selectedSize ? item.selectedSize === selectedSize : true)
        );

        if (existingItemIndex !== -1) {
          // Update the quantity of the existing item
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += quantity;
          saveToLocalStorage(updatedItems);
          return updatedItems;
        } else {
          // Add as a new item
          const newItem = {
            ...product,
            quantity,
            selectedSize: selectedSize || product.selectedSize || null
          };
          const updatedItems = [...items, newItem];
          saveToLocalStorage(updatedItems);
          return updatedItems;
        }
      });
    },

    // Update quantity of an item
    updateQuantity: (productId, size, newQuantity) => {
      update(items => {
        const updatedItems = items.map(item => {
          if (item.id === productId &&
              (size ? item.selectedSize === size : true)) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        saveToLocalStorage(updatedItems);
        return updatedItems;
      });
    },

    // Remove an item from the cart
    removeItem: (productId, size) => {
      update(items => {
        const updatedItems = items.filter(item =>
          !(item.id === productId &&
            (size ? item.selectedSize === size : true))
        );
        saveToLocalStorage(updatedItems);
        return updatedItems;
      });
    },

    // Clear the entire cart
    clearCart: () => {
      set([]);
      localStorage.removeItem('cart');
    }
  };
};

// Helper to save cart to localStorage
const saveToLocalStorage = (cart) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

// Create and export the cart store
export const cart = createCartStore();

// Derived store for cart total
export const cartTotal = derived(cart, $cart => {
  return $cart.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0);
});

// Derived store for cart item count
export const cartCount = derived(cart, $cart => {
  return $cart.reduce((count, item) => count + item.quantity, 0);
});
