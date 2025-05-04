<script>
  import HeroSection from '$lib/components/homepage/HeroSection.svelte';
  import FeaturedProducts from '$lib/components/homepage/FeaturedProducts.svelte';
  import CollectionsShowcase from '$lib/components/homepage/CollectionsShowcase.svelte';
  import Testimonials from '$lib/components/homepage/Testimonials.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<svelte:head>
  <title>LuxeHaven | Elegant & Sophisticated E-commerce</title>
  <meta name="description" content="Discover our curated collection of luxury goods at LuxeHaven, your destination for sophisticated and elegant products." />
</svelte:head>

<div>
  <HeroSection />

  <div class="py-16 bg-white text-center">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <h3 class="text-xl font-display font-bold mb-2">Luxury Packaging</h3>
          <p class="text-gray-600">Every item is meticulously packaged to ensure a luxurious unboxing experience.</p>
        </div>

        <div class="p-6">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-display font-bold mb-2">Quality Guarantee</h3>
          <p class="text-gray-600">We stand behind the quality of our products with a satisfaction guarantee.</p>
        </div>

        <div class="p-6">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5a.5.5 0 01.5.5.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5" />
            </svg>
          </div>
          <h3 class="text-xl font-display font-bold mb-2">Artisan Crafted</h3>
          <p class="text-gray-600">Each product is crafted with exceptional attention to detail and design.</p>
        </div>
      </div>
    </div>
  </div>

  <FeaturedProducts />

  <div class="py-20 bg-black">
    <div class="container-custom flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <h2 class="section-title text-white mb-6">
          Elevate Your <span class="text-gold-400">Everyday</span>
        </h2>
        <p class="text-gray-300 mb-6">
          At LuxeHaven, we believe in the power of beautiful objects to enhance your daily life. Our curated collection brings together luxury, functionality, and timeless elegance.
        </p>
        <a href="/about" class="btn-primary bg-gold-500 text-black hover:bg-gold-400 inline-block px-8 py-3">
          Our Story
        </a>
      </div>

      <div class="md:w-1/2 relative">
        <div class="aspect-w-4 aspect-h-3 bg-gray-900">
          <img src="/images/about-preview.jpg" alt="Luxury products arrangement" class="object-cover" />
        </div>
        <div class="absolute -bottom-5 -left-5 w-48 h-48 bg-gold-500 -z-10"></div>
      </div>
    </div>
  </div>

  <CollectionsShowcase />

  <Testimonials />

  <Newsletter />
</div>
