<script>
  import { cart, cartTotal } from '$lib/stores/cartStore.js';
  import CartItem from '$lib/components/cart/CartItem.svelte';

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  function checkout() {
    alert('Checkout functionality would be implemented here with a real payment processor.');
  }

  function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      cart.clearCart();
    }
  }
</script>

<svelte:head>
  <title>Shopping Cart | LuxeHaven</title>
  <meta name="description" content="Review your cart items and proceed to checkout at LuxeHaven." />
</svelte:head>

<div class="bg-white py-12">
  <div class="container-custom">
    <h1 class="text-3xl md:text-4xl font-display font-bold mb-8">Your Shopping Cart</h1>

    {#if $cart.length > 0}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          {#each $cart as item (item.id + (item.selectedSize || ''))}
            <CartItem {item} />
          {/each}

          <div class="mt-6 flex justify-between">
            <a href="/shop" class="inline-flex items-center text-gray-600 hover:text-gold-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              Continue Shopping
            </a>

            <button
              on:click={clearCart}
              class="text-red-600 hover:text-red-800 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 p-6 border border-gray-200">
            <h2 class="text-xl font-semibold mb-4">Order Summary</h2>

            <div class="space-y-3 mb-4">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice($cartTotal)}</span>
              </div>

              <div class="flex justify-between">
                <span>Shipping</span>
                <span class="text-gray-600">Calculated at checkout</span>
              </div>

              <div class="flex justify-between">
                <span>Tax</span>
                <span class="text-gray-600">Calculated at checkout</span>
              </div>
            </div>

            <div class="border-t border-gray-300 pt-3 mb-4">
              <div class="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice($cartTotal)}</span>
              </div>
            </div>

            <button
              on:click={checkout}
              class="w-full py-3 bg-gold-500 text-black font-medium hover:bg-gold-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    {:else}
      <div class="text-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 class="text-2xl font-display font-semibold mb-4">Your cart is empty</h2>
        <p class="text-gray-600 mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <a href="/shop" class="btn-primary bg-gold-500 text-black hover:bg-gold-400 inline-block px-8 py-3">
          Start Shopping
        </a>
      </div>
    {/if}
  </div>
</div>
