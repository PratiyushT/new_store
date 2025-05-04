<script>
  import Newsletter from '$lib/components/Newsletter.svelte';

  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  let success = false;

  function handleSubmit(e) {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend service
    console.log('Form submitted', formData);

    // Show success message
    success = true;

    // Reset form
    formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      success = false;
    }, 5000);
  }
</script>

<svelte:head>
  <title>Contact Us | LuxeHaven</title>
  <meta name="description" content="Get in touch with LuxeHaven for inquiries about our products or for customer support." />
</svelte:head>

<div class="bg-white">
  <!-- Header Section -->
  <div class="relative bg-black py-24">
    <div class="container-custom relative z-10">
      <h1 class="section-title text-white">Get in Touch</h1>
      <div class="w-24 h-1 bg-gold-500 mb-8"></div>
      <p class="text-gray-300 max-w-3xl text-lg">
        Have questions about our products or need assistance with an order? We're here to help.
      </p>
    </div>
  </div>

  <!-- Contact Information & Form -->
  <div class="py-20">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Contact Information -->
        <div class="lg:col-span-1">
          <h2 class="text-2xl font-display font-bold mb-6">Contact Information</h2>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="text-gold-500 mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">Email</h3>
                <p class="text-gray-600 mb-1">For general inquiries:</p>
                <a href="mailto:info@luxehaven.com" class="text-gold-600 hover:text-gold-800">info@luxehaven.com</a>
                <p class="text-gray-600 mt-2 mb-1">For customer support:</p>
                <a href="mailto:support@luxehaven.com" class="text-gold-600 hover:text-gold-800">support@luxehaven.com</a>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-gold-500 mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">Phone</h3>
                <p class="text-gray-600 mb-1">Customer Service:</p>
                <a href="tel:+18001234567" class="text-gold-600 hover:text-gold-800">+1 (800) 123-4567</a>
                <p class="text-gray-600 mt-2 mb-1">Hours of Operation:</p>
                <p class="text-gray-700">Monday - Friday: 9am - 6pm EST</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-gold-500 mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">Office Address</h3>
                <p class="text-gray-700">
                  123 Luxury Lane<br />
                  Suite 500<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-10">
            <h3 class="text-lg font-semibold mb-3">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-600 hover:text-gold-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gold-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gold-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gold-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-display font-bold mb-6">Send Us a Message</h2>

          {#if success}
            <div class="bg-green-100 text-green-800 p-4 mb-6 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="font-bold">Thank you for your message!</h3>
                <p>We've received your inquiry and will get back to you as soon as possible.</p>
              </div>
            </div>
          {/if}

          <form on:submit={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                required
                class="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label for="message" class="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="bg-gold-500 text-black px-6 py-3 font-medium hover:bg-gold-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Map Section -->
  <div class="py-10 bg-gray-50">
    <div class="container-custom">
      <div class="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9735439747635!2d-73.99181472444372!3d40.747021171391535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7706da7f1%3A0x7e615d684e4aac2a!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684155525816!5m2!1sen!2sus"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          title="LuxeHaven Location"
        ></iframe>
      </div>
    </div>
  </div>

  <Newsletter />
</div>
