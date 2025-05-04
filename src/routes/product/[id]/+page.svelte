<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { getProductById, allProducts } from '$lib/stores/productStore.js';
  import { cart } from '$lib/stores/cartStore.js';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data;

  // Get the product ID from the URL
  $: productId = parseInt($page.params.id);
  $: product = getProductById(productId);

  // State for the product page
  let selectedImage = 0;
  let quantity = 1;
  let selectedSize = null;
  let addedToCart = false;

  // Get related products (same category or collection)
  $: relatedProducts = $allProducts
    .filter(p =>
      p.id !== product?.id &&
      (p.category === product?.category || p.collection === product?.collection)
    )
    .slice(0, 4);

  function handleSizeSelect(size) {
    selectedSize = size;
  }

  function incrementQuantity() {
    quantity++;
  }

  function decrementQuantity() {
    if (quantity > 1) {
      quantity--;
    }
  }

  function addToCart() {
    if (product) {
      // If product has size options, make sure one is selected
      if (product.options?.sizes && !selectedSize) {
        alert('Please select a size');
        return;
      }

      cart.addItem(product, quantity, selectedSize);

      // Show added to cart message
      addedToCart = true;
      setTimeout(() => {
        addedToCart = false;
      }, 3000);
    }
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }
</script>

<svelte:head>
  {#if product}
    <title>{product.name} | LuxeHaven</title>
    <meta name="description" content={product.description} />
  {/if}
</svelte:head>

{#if product}
  <div class="bg-white py-12">
    <div class="container-custom">
      <!-- Breadcrumb -->
      <div class="text-sm breadcrumbs mb-8">
        <ul class="flex space-x-2">
          <li><a href="/" class="text-gray-500 hover:text-gold-500">Home</a></li>
          <li><span class="text-gray-500 mx-2">/</span></li>
          <li><a href="/shop" class="text-gray-500 hover:text-gold-500">Shop</a></li>
          <li><span class="text-gray-500 mx-2">/</span></li>
          <li><span class="text-black">{product.name}</span></li>
        </ul>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div>
          <!-- Main Image -->
          <div class="bg-gray-50 mb-4 aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={product.images[selectedImage] || '/images/placeholder.jpg'}
              alt={product.name}
              class="w-full h-full object-cover object-center"
            />
          </div>

          <!-- Thumbnail Images -->
          {#if product.images.length > 1}
            <div class="flex space-x-4">
              {#each product.images as image, index}
                <button
                  class={`w-20 h-20 border-2 ${selectedImage === index ? 'border-gold-500' : 'border-gray-200'}`}
                  on:click={() => selectedImage = index}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    class="w-full h-full object-cover object-center"
                  />
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Product Details -->
        <div>
          <h1 class="text-3xl md:text-4xl font-display font-bold mb-4">{product.name}</h1>

          <!-- Price -->
          <div class="mb-6">
            {#if product.discountPrice}
              <div class="flex items-baseline">
                <span class="text-2xl font-bold text-black">{formatPrice(product.discountPrice)}</span>
                <span class="text-lg text-gray-500 line-through ml-3">{formatPrice(product.price)}</span>
              </div>
            {:else}
              <span class="text-2xl font-bold text-black">{formatPrice(product.price)}</span>
            {/if}
          </div>

          <!-- Description -->
          <p class="text-gray-700 mb-8">{product.description}</p>

          <!-- Attributes -->
          {#if product.attributes}
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-2">Details</h3>
              <ul class="space-y-2">
                {#each Object.entries(product.attributes) as [key, value]}
                  <li>
                    <span class="font-medium text-gray-800 capitalize">{key}:</span>
                    <span class="text-gray-600">{value}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- Options (if any) -->
          {#if product.options}
            <!-- Color Options -->
            {#if product.options.colors}
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-3">Color</h3>
                <div class="flex space-x-3">
                  {#each product.options.colors as color}
                    <button
                      class="w-8 h-8 rounded-full border-2 focus:outline-none"
                      style={`background-color: ${color.value}; border-color: ${selectedSize === color.name ? '#FFBF00' : 'transparent'}`}
                      title={color.name}
                      on:click={() => handleSizeSelect(color.name)}
                    ></button>
                  {/each}
                </div>
              </div>
            {/if}

            <!-- Size Options -->
            {#if product.options.sizes}
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-3">Size</h3>
                <div class="flex flex-wrap gap-2">
                  {#each product.options.sizes as size}
                    <button
                      class={`min-w-[4rem] py-2 px-3 border ${selectedSize === size ? 'border-gold-500 bg-gold-50' : 'border-gray-300 hover:border-gold-300'}`}
                      on:click={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  {/each}
                </div>
              </div>
            {/if}
          {/if}

          <!-- Quantity and Add to Cart -->
          <div class="mt-8">
            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Quantity Selector -->
              <div class="flex items-center border border-gray-300">
                <button
                  class="w-10 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                  on:click={decrementQuantity}
                >
                  -
                </button>
                <span class="w-12 h-12 flex items-center justify-center border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  class="w-10 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                  on:click={incrementQuantity}
                >
                  +
                </button>
              </div>

              <!-- Add to Cart Button -->
              <button
                class="flex-grow py-3 px-6 bg-gold-500 text-black font-medium hover:bg-gold-600 transition"
                on:click={addToCart}
              >
                Add to Cart
              </button>
            </div>

            <!-- Added to Cart Message -->
            {#if addedToCart}
              <div class="mt-3 py-2 px-4 bg-green-100 text-green-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Added to cart!
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Related Products -->
      {#if relatedProducts.length > 0}
        <div class="mt-20">
          <h2 class="text-2xl font-display font-bold mb-8">You May Also Like</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each relatedProducts as product (product.id)}
              <ProductCard {product} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div class="py-16 text-center">
    <h1 class="text-2xl mb-4">Product not found</h1>
    <p class="mb-6">Sorry, we couldn't find the product you're looking for.</p>
    <a href="/shop" class="btn-primary">Return to Shop</a>
  </div>
{/if}
