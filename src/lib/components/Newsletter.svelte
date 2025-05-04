<script>
  let email = '';

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    email = '';
  }
</script>

<section class="py-20 bg-black">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-display font-bold text-white mb-4">Join Our Circle of Elegance</h2>
      <p class="text-gray-400 mb-8">
        Subscribe to receive updates about new collections, exclusive offers, and styling inspiration.
      </p>

      <form on:submit={handleSubmit} class="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
        <input
          type="email"
          bind:value={email}
          placeholder="Your email address"
          required
          class="flex-grow px-4 py-3 bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <button
          type="submit"
          class="bg-gold-500 text-black px-6 py-3 font-medium hover:bg-gold-400 transition whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>

      <p class="text-gray-500 text-sm mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </div>
</section>
