<script>
  let email = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be connected to a real newsletter subscription later
    alert(`Thank you for subscribing with ${email}`);
    email = '';
  };
</script>

<footer class="bg-black text-white pt-16 pb-8">
  <div class="container-custom">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <!-- Logo and Description -->
      <div>
        <a href="/" class="inline-block mb-4">
          <span class="text-3xl font-display font-bold text-white">LUXE<span class="text-gold-400">HAVEN</span></span>
        </a>
        <p class="text-gray-400 mb-4">
          Discover our elegant and sophisticated collection of luxury goods designed for the discerning customer.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-gold-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gold-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gold-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gold-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-display font-bold mb-4 text-gold-400">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="/" class="text-gray-400 hover:text-white transition">Home</a></li>
          <li><a href="/shop" class="text-gray-400 hover:text-white transition">Shop</a></li>
          <li><a href="/collections" class="text-gray-400 hover:text-white transition">Collections</a></li>
          <li><a href="/about" class="text-gray-400 hover:text-white transition">About Us</a></li>
          <li><a href="/contact" class="text-gray-400 hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <!-- Customer Service -->
      <div>
        <h3 class="text-lg font-display font-bold mb-4 text-gold-400">Customer Service</h3>
        <ul class="space-y-2">
          <li><a href="/shipping" class="text-gray-400 hover:text-white transition">Shipping Policy</a></li>
          <li><a href="/returns" class="text-gray-400 hover:text-white transition">Returns & Exchanges</a></li>
          <li><a href="/faq" class="text-gray-400 hover:text-white transition">FAQs</a></li>
          <li><a href="/privacy" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          <li><a href="/terms" class="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-display font-bold mb-4 text-gold-400">Stay Connected</h3>
        <p class="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <form on:submit={handleSubmit} class="flex flex-col space-y-2">
          <input
            type="email"
            bind:value={email}
            placeholder="Your email address"
            required
            class="bg-gray-800 border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <button type="submit" class="bg-gold-500 text-white px-4 py-2 font-medium hover:bg-gold-600 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-500 text-center md:text-left mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} LuxeHaven. All rights reserved.
      </p>
      <div class="flex space-x-4">
        <a href="#" class="text-gray-500 hover:text-gold-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-10" viewBox="0 0 38 24" fill="none">
            <rect width="38" height="24" rx="3" fill="#252525"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.382 12.001C21.382 14.761 19.142 17.001 16.382 17.001C13.621 17.001 11.382 14.761 11.382 12.001C11.382 9.24 13.621 7 16.382 7C19.142 7 21.382 9.24 21.382 12.001Z" fill="#EB001B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.644 12.001C26.644 14.761 24.404 17.001 21.644 17.001C18.883 17.001 16.644 14.761 16.644 12.001C16.644 9.24 18.883 7 21.644 7C24.404 7 26.644 9.24 26.644 12.001Z" fill="#F79E1B"/>
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gold-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-10" viewBox="0 0 38 24" fill="none">
            <rect width="38" height="24" rx="3" fill="#252525"/>
            <path d="M10 14.586L13.879 14.586C13.879 14.586 15.17 14.586 15.17 13.293C15.17 12 13.879 12 13.879 12L10 12L10 9.414L13.879 9.414C13.879 9.414 17.75 9.414 17.75 12C17.75 14.586 13.879 14.586 13.879 14.586L10 14.586Z" fill="#0077A6"/>
            <path d="M28.75 14.586L24.871 14.586C24.871 14.586 23.58 14.586 23.58 13.293C23.58 12 24.871 12 24.871 12L28.75 12L28.75 9.414L24.871 9.414C24.871 9.414 21 9.414 21 12C21 14.586 24.871 14.586 24.871 14.586L28.75 14.586Z" fill="#0077A6"/>
            <path d="M20 9.414H18.709V14.586H20V9.414Z" fill="#0077A6"/>
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gold-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-10" viewBox="0 0 38 24" fill="none">
            <rect width="38" height="24" rx="3" fill="#252525"/>
            <path d="M25.737 16H22.688V9.093H25.737V16ZM21.825 12.852H19.663V16H16.632V9.093H19.663V10.574H21.825V9.093H24.873V11.055H22.688V12.852H24.873V14.519H21.825V12.852ZM15.752 16H12.703V9.093H15.752V16Z" fill="#FFB600"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
