<script>
  import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<svelte:head>
  <title>About Us | LuxeHaven</title>
  <meta name="description" content="Learn about LuxeHaven's mission to bring elegant and sophisticated luxury goods to discerning customers." />
</svelte:head>

<div class="bg-white">
  <!-- Header Section -->
  <div class="relative bg-black py-24">
    <div class="container-custom relative z-10">
      <h1 class="section-title text-white">Our Story</h1>
      <div class="w-24 h-1 bg-gold-500 mb-8"></div>
      <p class="text-gray-300 max-w-3xl text-lg">
        At LuxeHaven, we are dedicated to curating exceptional products that combine timeless elegance with modern sophistication.
      </p>
    </div>
  </div>

  <!-- Vision & Mission -->
  <div class="py-20">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-display font-bold mb-6">Our Vision</h2>
          <p class="text-gray-700 mb-6">
            We envision a world where everyday objects transcend their functional purpose to become sources of beauty and inspiration. Our carefully selected products are designed to elevate your surroundings and bring a sense of luxury to daily life.
          </p>
          <p class="text-gray-700">
            We believe that true luxury lies not only in the quality of materials and craftsmanship but also in the thoughtfulness of design and the stories behind each piece.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-display font-bold mb-6">Our Commitment</h2>
          <p class="text-gray-700 mb-6">
            We are committed to ethical sourcing and sustainable practices. Each product in our collection is selected not only for its beauty and craftsmanship but also for the responsible way it's produced.
          </p>
          <p class="text-gray-700">
            We work with artisans and makers who share our values of quality, integrity, and attention to detail, ensuring that every item in our collection meets our exacting standards.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Team Section -->
  <div class="py-20 bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-title">Our Team</h2>
        <div class="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Meet the dedicated individuals behind LuxeHaven, each bringing their unique expertise and passion for luxury goods.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
            <img src="/images/team/team-1.jpg" alt="Emily Richardson" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-semibold mb-1">Emily Richardson</h3>
          <p class="text-gold-600 mb-3">Founder & Creative Director</p>
          <p class="text-gray-600">
            With over 15 years in luxury retail, Emily brings her refined taste and vision for elegant living to LuxeHaven.
          </p>
        </div>

        <div class="text-center">
          <div class="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
            <img src="/images/team/team-2.jpg" alt="Alexander Chen" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-semibold mb-1">Alexander Chen</h3>
          <p class="text-gold-600 mb-3">Head of Product Curation</p>
          <p class="text-gray-600">
            Alex travels the world to discover unique pieces and works directly with artisans to create exclusive collections.
          </p>
        </div>

        <div class="text-center">
          <div class="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
            <img src="/images/team/team-3.jpg" alt="Olivia Martinez" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-semibold mb-1">Olivia Martinez</h3>
          <p class="text-gold-600 mb-3">Customer Experience Director</p>
          <p class="text-gray-600">
            Olivia ensures that every interaction with LuxeHaven reflects our commitment to excellence and personalized service.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Values -->
  <div class="py-20">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-title">Our Values</h2>
        <div class="w-24 h-1 bg-gold-500 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="p-6 border border-gray-200">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Quality</h3>
          <p class="text-gray-600">
            We never compromise on quality, selecting only the finest materials and craftsmanship for our collection.
          </p>
        </div>

        <div class="p-6 border border-gray-200">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5a.5.5 0 01.5.5.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Artistry</h3>
          <p class="text-gray-600">
            We celebrate the artistic vision and skilled craftsmanship behind each item in our collection.
          </p>
        </div>

        <div class="p-6 border border-gray-200">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Sustainability</h3>
          <p class="text-gray-600">
            We are committed to ethical sourcing and sustainable practices that respect both people and planet.
          </p>
        </div>

        <div class="p-6 border border-gray-200">
          <div class="text-gold-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Experience</h3>
          <p class="text-gray-600">
            We believe in creating an exceptional experience in every aspect of your interaction with LuxeHaven.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Newsletter />
</div>
