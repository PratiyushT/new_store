<script>
  import { cart } from '$lib/stores/cartStore.js';

  export let item;

  function removeItem() {
    cart.removeItem(item.id, item.selectedSize);
  }

  function updateQuantity(newQuantity) {
    if (newQuantity < 1) return;
    cart.updateQuantity(item.id, item.selectedSize, newQuantity);
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }
</script>

<div class="flex items-start border-b border-gray-200 py-4">
  <!-- Product Image -->
  <a href={`/product/${item.id}`} class="shrink-0 w-20 h-20 bg-gray-100 overflow-hidden">
    <img src={item.images[0] || '/images/placeholder.jpg'} alt={item.name} class="w-full h-full object-cover object-center" />
  </a>

  <!-- Product Details -->
  <div class="flex-grow ml-4">
    <div class="flex justify-between">
      <a href={`/product/${item.id}`} class="text-lg font-medium hover:text-gold-500 transition">
        {item.name}
      </a>
      <button class="text-gray-400 hover:text-black" on:click={removeItem}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    {#if item.selectedSize}
      <p class="text-sm text-gray-500 mt-1">Size: {item.selectedSize}</p>
    {/if}

    <div class="flex justify-between items-center mt-2">
      <div class="flex items-center border border-gray-300">
        <button
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          on:click={() => updateQuantity(item.quantity - 1)}
        >
          -
        </button>
        <span class="w-8 h-8 flex items-center justify-center text-sm">
          {item.quantity}
        </span>
        <button
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          on:click={() => updateQuantity(item.quantity + 1)}
        >
          +
        </button>
      </div>

      <div>
        {#if item.discountPrice}
          <div class="text-right">
            <span class="font-semibold">{formatPrice(item.discountPrice * item.quantity)}</span>
            <span class="text-sm text-gray-500 line-through ml-1">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        {:else}
          <span class="font-semibold">{formatPrice(item.price * item.quantity)}</span>
        {/if}
      </div>
    </div>
  </div>
</div>
