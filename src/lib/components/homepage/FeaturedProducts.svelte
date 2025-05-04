<script>
  import { allProducts } from '$lib/stores/productStore.js';
  import ProductCard from '../ProductCard.svelte';

  $: featuredProducts = $allProducts.filter(product => product.featured).slice(0, 4);
</script>

<section class="py-16 bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title text-black">Featured Products</h2>
      <div class="w-24 h-1 bg-gold-500 mx-auto"></div>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Discover our hand-picked selection of premium products, curated for their exceptional quality and elegant design.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each featuredProducts as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>

    <div class="mt-12 text-center">
      <a href="/shop" class="btn-primary inline-block">
        View All Products
      </a>
    </div>
  </div>
</section>
