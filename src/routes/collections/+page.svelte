<script>
  import { collections } from '$lib/stores/productStore.js';
  import Newsletter from '$lib/components/Newsletter.svelte';

  const displayedCollections = $collections.filter(collection => collection.id !== 'all');
</script>

<svelte:head>
  <title>Collections | LuxeHaven</title>
  <meta name="description" content="Explore our curated luxury collections, each with its own unique character and style." />
</svelte:head>

<div class="bg-white">
  <!-- Header Section -->
  <div class="relative bg-black py-24">
    <div class="container-custom relative z-10">
      <h1 class="section-title text-white">Our Collections</h1>
      <div class="w-24 h-1 bg-gold-500 mb-8"></div>
      <p class="text-gray-300 max-w-3xl text-lg">
        Explore our curated collections, each with its own unique character and style.
      </p>
    </div>
  </div>

  <!-- Collections Grid -->
  <div class="py-20">
    <div class="container-custom">
      <div class="grid grid-cols-1 gap-16">
        {#each displayedCollections as collection (collection.id)}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-display font-bold mb-4">{collection.name}</h2>
              <div class="w-16 h-1 bg-gold-500 mb-6"></div>

              {#if collection.id === 'timeless'}
                <p class="text-gray-700 mb-6">
                  Our Timeless Elegance collection features pieces that transcend trends, embracing classic designs with a contemporary twist. These sophisticated items are crafted to stand the test of time, both in quality and aesthetic appeal.
                </p>
                <p class="text-gray-700 mb-8">
                  Each piece in this collection is made with premium materials and showcases exceptional craftsmanship, embodying true luxury that never goes out of style.
                </p>
              {:else if collection.id === 'royal'}
                <p class="text-gray-700 mb-6">
                  The Royal Collection draws inspiration from regal palaces and aristocratic estates, featuring opulent designs with rich gold accents and luxurious materials. These statement pieces add a touch of majesty to any space or outfit.
                </p>
                <p class="text-gray-700 mb-8">
                  Lavish details and sumptuous textures create an air of grandeur, perfect for those who appreciate the finer things in life.
                </p>
              {:else if collection.id === 'harmony'}
                <p class="text-gray-700 mb-6">
                  Our Harmony & Balance collection combines minimalist design with perfect proportions, creating pieces that bring serenity and elegance to your surroundings. These items blend form and function beautifully.
                </p>
                <p class="text-gray-700 mb-8">
                  With clean lines and thoughtful details, this collection celebrates the beauty of simplicity and the harmony that comes from well-balanced design.
                </p>
              {/if}

              <a href={`/collections/${collection.id}`} class="btn-primary inline-block">
                View Collection
              </a>
            </div>

            <div class="order-1 lg:order-2">
              <img
                src={`/images/collections/${collection.id}.jpg`}
                alt={collection.name}
                class="w-full h-auto"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <Newsletter />
</div>
