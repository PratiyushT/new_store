<script>
  const testimonials = [
    {
      id: 1,
      quote: "I purchased the Golden Hour Watch as a gift for my husband, and he absolutely loves it. The craftsmanship is impeccable, and the packaging was elegant and sophisticated.",
      author: "Sophia R.",
      location: "New York, NY"
    },
    {
      id: 2,
      quote: "The Royal Velvet Cushion transformed my living room. The quality is exceptional, and the gold embroidery adds just the right touch of elegance without being overwhelming.",
      author: "Marcus T.",
      location: "Chicago, IL"
    },
    {
      id: 3,
      quote: "I've ordered from many luxury stores, but LuxeHaven's attention to detail and customer service are unmatched. My Marble & Gold Coasters arrived beautifully packaged and exceeded my expectations.",
      author: "Elise J.",
      location: "San Francisco, CA"
    }
  ];
</script>

<section class="py-16 bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title text-black">Our Customers</h2>
      <div class="w-24 h-1 bg-gold-500 mx-auto"></div>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Hear what our valued customers have to say about their LuxeHaven experience.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each testimonials as testimonial (testimonial.id)}
        <div class="bg-gray-50 p-8 relative">
          <div class="absolute -top-4 left-8 text-5xl text-gold-400">"</div>
          <p class="italic text-gray-700 mb-6 relative z-10">
            {testimonial.quote}
          </p>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-800 font-bold">
              {testimonial.author.charAt(0)}
            </div>
            <div class="ml-3">
              <p class="font-semibold">{testimonial.author}</p>
              <p class="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
