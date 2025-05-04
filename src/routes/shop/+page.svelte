<script>
  import { allProducts, categories, collections } from '$lib/stores/productStore.js';
  import ProductCard from '$lib/components/ProductCard.svelte';

  let selectedCategory = 'all';
  let selectedCollection = 'all';
  let searchQuery = '';
  let sortOption = 'newest';

  $: filteredProducts = $allProducts
    .filter(product => {
      // Filter by category
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Filter by collection
      if (selectedCollection !== 'all' && product.collection !== selectedCollection) {
        return false;
      }

      // Filter by search query
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())
          && !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort products
      switch (sortOption) {
        case 'price-low':
          return (a.discountPrice || a.price) - (b.discountPrice || b.price);
        case 'price-high':
          return (b.discountPrice || b.price) - (a.discountPrice || a.price);
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          // 'newest' is default
          return b.id - a.id;
      }
    });

  function handleCategoryChange(event) {
    selectedCategory = event.target.value;
  }

  function handleCollectionChange(event) {
    selectedCollection = event.target.value;
  }

  function handleSortChange(event) {
    sortOption = event.target.value;
  }

  function handleSearchInput(event) {
    searchQuery = event.target.value;
  }
</script>

<svelte:head>
  <title>Shop | LuxeHaven</title>
  <meta name="description" content="Browse our collection of luxury products. Find elegant and sophisticated items for every taste." />
</svelte:head>

<div class="py-12 bg-white">
  <div class="container-custom">
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="section-title">Our Collection</h1>
      <div class="w-24 h-1 bg-gold-500 mx-auto"></div>
    </div>

    <!-- Filters and Search -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      <!-- Search -->
      <div class="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          on:input={handleSearchInput}
          class="w-full py-2 px-4 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
        />
        <svg class="absolute right-3 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Category Filter -->
      <div>
        <select
          bind:value={selectedCategory}
          on:change={handleCategoryChange}
          class="w-full py-2 px-4 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
        >
          {#each $categories as category}
            <option value={category.id}>{category.name}</option>
          {/each}
        </select>
      </div>

      <!-- Collection Filter -->
      <div>
        <select
          bind:value={selectedCollection}
          on:change={handleCollectionChange}
          class="w-full py-2 px-4 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
        >
          {#each $collections as collection}
            <option value={collection.id}>{collection.name}</option>
          {/each}
        </select>
      </div>

      <!-- Sort Options -->
      <div>
        <select
          bind:value={sortOption}
          on:change={handleSortChange}
          class="w-full py-2 px-4 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>

    <!-- Results Count -->
    <p class="text-gray-600 mb-6">
      Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
    </p>

    <!-- Products Grid -->
    {#if filteredProducts.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each filteredProducts as product (product.id)}
          <ProductCard {product} />
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <p class="text-lg text-gray-600 mb-4">No products match your filters.</p>
        <button
          on:click={() => {
            selectedCategory = 'all';
            selectedCollection = 'all';
            searchQuery = '';
            sortOption = 'newest';
          }}
          class="btn-primary"
        >
          Clear Filters
        </button>
      </div>
    {/if}
  </div>
</div>
