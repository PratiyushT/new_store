<div class="relative h-screen min-h-[600px] max-h-[1080px] bg-gray-100 overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0 z-0">
    <img
      src="/images/hero-bg.jpg"
      alt="Luxury Collection"
      class="w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  </div>

  <!-- Content -->
  <div class="container-custom relative z-10 h-full flex items-center">
    <div class="max-w-2xl text-white">
      <h1 class="section-title text-5xl md:text-6xl lg:text-7xl mb-4">
        <span class="text-gold-300">Elegant</span> & <br/> Sophisticated
      </h1>
      <p class="text-lg md:text-xl mb-8 text-gray-100">
        Discover our curated collection of luxury items that blend elegance with modern sophistication.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="/shop" class="btn-primary bg-gold-500 text-black hover:bg-gold-400 inline-block text-center px-8 py-3">
          Shop Now
        </a>
        <a href="/collections" class="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 inline-block text-center px-8 py-3">
          Explore Collections
        </a>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
    <span class="text-white text-sm mb-2">Scroll to discover</span>
    <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
      <div class="w-1 h-2 bg-white rounded-full animate-bounce mt-1"></div>
    </div>
  </div>
</div>
