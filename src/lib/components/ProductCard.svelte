<script>
  import { cart } from '$lib/stores/cartStore.js';

  export let product;

  function addToCart() {
    cart.addItem(product, 1);
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }
</script>

<div class="product-card flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg group">
  <!-- Product Image with Overlay -->
  <div class="relative overflow-hidden">
    <a href={`/product/${product.id}`} class="block relative pb-[125%]">
      <img
        src={product.images[0] || '/images/placeholder.jpg'}
        alt={product.name}
        class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Badges -->
      <div class="absolute top-4 left-4 flex flex-col gap-2">
        {#if product.new}
          <span class="bg-gold-500 text-white text-xs font-bold uppercase py-1 px-2">New</span>
        {/if}
        {#if product.discountPrice}
          <span class="bg-black text-white text-xs font-bold uppercase py-1 px-2">Sale</span>
        {/if}
      </div>

      <!-- Quick Add Button (Appears on Hover) -->
      <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          on:click|preventDefault={addToCart}
          class="bg-white text-black hover:bg-gold-500 hover:text-white transition-colors duration-300 py-2 px-4 font-medium"
        >
          Quick Add
        </button>
      </div>
    </a>
  </div>

  <!-- Product Info -->
  <div class="p-4 flex flex-col flex-grow">
    <a href={`/product/${product.id}`} class="block">
      <h3 class="text-lg font-medium mb-1 group-hover:text-gold-500 transition-colors duration-300">{product.name}</h3>
    </a>

    <div class="mt-auto pt-3">
      <!-- Price -->
      <div class="flex items-baseline">
        {#if product.discountPrice}
          <span class="text-gray-800 font-bold">{formatPrice(product.discountPrice)}</span>
          <span class="text-gray-500 line-through ml-2 text-sm">{formatPrice(product.price)}</span>
        {:else}
          <span class="text-gray-800 font-bold">{formatPrice(product.price)}</span>
        {/if}
      </div>
    </div>
  </div>
</div>
