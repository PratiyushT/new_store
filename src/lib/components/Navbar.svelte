<script>
  import { onMount } from 'svelte';
  import { cartCount } from '$lib/stores/cartStore.js';

  let scrollY = 0;
  let isMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const closeMenu = () => {
    isMenuOpen = false;
  };
</script>

<header class={`fixed w-full z-50 transition duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
  <div class="container-custom flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="flex items-center">
      <span class="text-3xl font-display font-bold text-black">LUXE<span class="text-gold-500">HAVEN</span></span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-8">
      <a href="/" class="font-medium hover:text-gold-500 transition">Home</a>
      <a href="/shop" class="font-medium hover:text-gold-500 transition">Shop</a>
      <a href="/collections" class="font-medium hover:text-gold-500 transition">Collections</a>
      <a href="/about" class="font-medium hover:text-gold-500 transition">About</a>
      <a href="/contact" class="font-medium hover:text-gold-500 transition">Contact</a>
    </nav>

    <!-- Cart and Mobile Menu Button -->
    <div class="flex items-center space-x-4">
      <!-- Cart Icon -->
      <a href="/cart" class="relative p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {#if $cartCount > 0}
          <span class="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {$cartCount}
          </span>
        {/if}
      </a>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2" on:click={toggleMenu} aria-label="Toggle Menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
      <div class="container-custom py-4 flex flex-col space-y-4">
        <a href="/" class="font-medium py-2" on:click={closeMenu}>Home</a>
        <a href="/shop" class="font-medium py-2" on:click={closeMenu}>Shop</a>
        <a href="/collections" class="font-medium py-2" on:click={closeMenu}>Collections</a>
        <a href="/about" class="font-medium py-2" on:click={closeMenu}>About</a>
        <a href="/contact" class="font-medium py-2" on:click={closeMenu}>Contact</a>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer for fixed header -->
<div class="h-16 md:h-20"></div>
