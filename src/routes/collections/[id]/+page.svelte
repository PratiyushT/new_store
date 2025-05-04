<script>
  import { page } from '$app/stores';
  import { collections, allProducts } from '$lib/stores/productStore.js';
  import ProductCard from '$lib/components/ProductCard.svelte';

  // Get collection ID from URL
  $: collectionId = $page.params.id;

  // Find the collection by ID
  $: collection = $collections.find(c => c.id === collectionId);

  // Filter products by collection
  $: collectionProducts = $allProducts.filter(product => product.collection === collectionId);
</script>

<svelte:head>
  {#if collection}
    <title>{collection.name} | LuxeHaven</title>
    <meta name="description" content="Explore our {collection.name} collection, featuring elegant and sophisticated luxury products." />
  {:else}
    <title>Collection | LuxeHaven</title>
    <meta name="description" content="Explore our curated luxury collections at LuxeHaven." />
  {/if}
</svelte:head>

{#if collection}
  <div class="bg-white">
    <!-- Collection Header -->
    <div class="relative bg-black py-24">
      <div class="absolute inset-0 opacity-60">
        <img
          src={`/images/collections/${collection.id}.jpg`}
          alt={collection.name}
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="container-custom relative z-10">
        <h1 class="section-title text-white">
          {collection.name}
        </h1>
        <div class="w-24 h-1 bg-gold-500 mb-8"></div>

        {#if collection.id === 'timeless'}
          <p class="text-white max-w-3xl text-lg">
            Discover pieces that transcend trends, embracing classic designs with a contemporary twist.
          </p>
        {:else if collection.id === 'royal'}
          <p class="text-white max-w-3xl text-lg">
            Explore our Royal Collection, featuring opulent designs with rich gold accents and luxurious materials.
          </p>
        {:else if collection.id === 'harmony'}
          <p class="text-white max-w-3xl text-lg">
            Experience our Harmony & Balance collection, combining minimalist design with perfect proportions.
          </p>
        {/if}
      </div>
    </div>

    <!-- Collection Description -->
    <div class="py-16 bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          {#if collection.id === 'timeless'}
            <p class="text-gray-700 mb-6">
              Our Timeless Elegance collection features pieces that transcend trends, embracing classic designs with a contemporary twist. These sophisticated items are crafted to stand the test of time, both in quality and aesthetic appeal.
            </p>
            <p class="text-gray-700">
              Each piece in this collection is made with premium materials and showcases exceptional craftsmanship, embodying true luxury that never goes out of style.
            </p>
          {:else if collection.id === 'royal'}
            <p class="text-gray-700 mb-6">
              The Royal Collection draws inspiration from regal palaces and aristocratic estates, featuring opulent designs with rich gold accents and luxurious materials. These statement pieces add a touch of majesty to any space or outfit.
            </p>
            <p class="text-gray-700">
              Lavish details and sumptuous textures create an air of grandeur, perfect for those who appreciate the finer things in life.
            </p>
          {:else if collection.id === 'harmony'}
            <p class="text-gray-700 mb-6">
              Our Harmony & Balance collection combines minimalist design with perfect proportions, creating pieces that bring serenity and elegance to your surroundings. These items blend form and function beautifully.
            </p>
            <p class="text-gray-700">
              With clean lines and thoughtful details, this collection celebrates the beauty of simplicity and the harmony that comes from well-balanced design.
            </p>
          {/if}
        </div>
      </div>
    </div>

    <!-- Collection Products -->
    <div class="py-10 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-display font-bold mb-12 text-center">Products in this Collection</h2>

        {#if collectionProducts.length > 0}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each collectionProducts as product (product.id)}
              <ProductCard {product} />
            {/each}
          </div>
        {:else}
          <div class="text-center py-12">
            <p class="text-gray-600 mb-6">No products found in this collection.</p>
            <a href="/shop" class="btn-primary">Browse All Products</a>
          </div>
        {/if}

        <div class="mt-12 text-center">
          <a href="/collections" class="inline-flex items-center text-gray-600 hover:text-gold-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Back to All Collections
          </a>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="py-16 text-center">
    <h1 class="text-2xl mb-4">Collection not found</h1>
    <p class="mb-6">Sorry, we couldn't find the collection you're looking for.</p>
    <a href="/collections" class="btn-primary">View All Collections</a>
  </div>
{/if}
