<script>
  import { collections } from '$lib/stores/productStore.js';

  const displayedCollections = $collections.filter(collection => collection.id !== 'all');
</script>

<section class="py-20 bg-gray-50">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="section-title text-black">Our Collections</h2>
      <div class="w-24 h-1 bg-gold-500 mx-auto"></div>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore our luxurious collections, each carefully curated to showcase the finest craftsmanship and design.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each displayedCollections as collection (collection.id)}
        <a
          href={`/collections/${collection.id}`}
          class="group relative h-96 overflow-hidden bg-black block"
        >
          <!-- Collection Image -->
          <img
            src={`/images/collections/${collection.id}.jpg`}
            alt={collection.name}
            class="w-full h-full object-cover object-center opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
          />

          <!-- Overlay and Title -->
          <div class="absolute inset-0 flex flex-col justify-end p-8">
            <h3 class="text-white text-2xl font-display font-bold mb-2 group-hover:text-gold-300 transition">
              {collection.name}
            </h3>
            <div class="w-12 h-0.5 bg-gold-500 mb-3 transform origin-left group-hover:scale-x-150 transition-transform"></div>
            <p class="text-white text-sm">
              Explore Collection
              <span class="ml-2 inline-block transform group-hover:translate-x-2 transition-transform">→</span>
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
