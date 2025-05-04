# Project Structure

```
pransh-luxury-frontend/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                          # CI/CD pipeline configuration
├── .vscode/
│   ├── extensions.json                        # Recommended extensions
│   └── settings.json                          # Project-specific VS Code settings
├── static/                                    # Static assets (favicon, robots.txt, images, etc.)
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── lib/
│   │   ├── components/                        # Reusable UI components
│   │   │   ├── ui/                            # General UI components (Buttons, Cards, etc.)
│   │   │   ├── form/                          # Form inputs, validation wrappers
│   │   │   ├── cart/                          # Cart-specific UI components
│   │   │   ├── homepage/                      # Homepage-specific UI components
│   │   │   ├── wishlist/                      # Favorite-specific UI components
│   │   │   └── checkout/                      # Checkout-specific UI components
│   │   ├── stores/                            # Svelte stores (state management)
│   │   │   ├── cartStore.ts                   # Cart management (local + Supabase sync)
│   │   │   ├── wishlistStore.ts               # Wishlist management
│   │   │   ├── authStore.ts                   # Auth state management
│   │   │   └── uiStore.ts                     # Global UI state (loading indicators, modals)
│   │   ├── services/                          # Business logic separated from UI components
│   │   │   ├── cartService.ts                 # Cart logic (merge, sync, fetch, validate)
│   │   │   ├── authService.ts                 # Authentication logic (login, logout, user info)
│   │   │   ├── sanityService.ts               # Sanity CMS integration (fetch products, validate data)
│   │   │   ├── supabaseService.ts             # Supabase interactions (queries, mutations, RPCs)
│   │   │   └── stripeService.ts               # Stripe payment processing
│   │   ├── queries/                           # Sanity GROQ queries
│   │   │   ├── productsQueries.ts
│   │   │   └── categoriesQueries.ts
│   │   ├── clients/                           # Client initialization for backend
│   │   │   ├── sanityClient.ts
│   │   │   ├── stripeClient.ts
│   │   │   └── supabaseClient.ts
│   │   ├── auth/                              # Supabase auth helpers
│   │   │   ├── client.ts                      # Supabase client initialization
│   │   │   └── hooks.server.ts                # Auth hooks for SvelteKit SSR
│   │   ├── types/                             # TypeScript definitions
│   │   │   ├── index.ts                       # Centralized exports
│   │   │   ├── products.ts                    # Product and variant types
│   │   │   ├── user.ts                        # User profile & auth types
│   │   │   └── cart.ts                        # Cart item types
│   │   └── utils/                             # Utility functions (formatting, helpers, etc.)
│   │       └── env.ts                         # Safe imports for environment variables. Only import from here. 
│   ├── params/                                # Type definitions for route parameters
│   │   └── slug.ts
│   ├── routes/                                # SvelteKit routing structure
│   │   ├── +layout.svelte                     # Global layout
│   │   ├── +page.svelte                       # Homepage
│   │   ├── shop/
│   │   │   ├── +page.svelte                   # Product listings
│   │   │   ├── +page.server.ts                # Fetch products with filters/pagination
│   │   │   └── [slug]/
│   │   │       ├── +page.svelte               # Single product page
│   │   │       └── +page.server.ts            # Fetch single product data
│   │   ├── cart/
│   │   │   └── +page.svelte                   # Shopping cart page
│   │   ├── checkout/
│   │   │   ├── +page.svelte                   # Checkout page (Stripe integration)
│   │   │   └── success/
│   │   │       └── +page.svelte               # Order confirmation page
│   │   ├── account/
│   │   │   ├── +layout.svelte                 # Protected user area layout
│   │   │   ├── +page.svelte                   # User account dashboard
│   │   │   ├── orders/
│   │   │   │   └── +page.svelte               # Order history
│   │   │   ├── addresses/
│   │   │   │   └── +page.svelte               # Manage addresses
│   │   │   ├── wishlist/
│   │   │   │   └── +page.svelte               # Wishlist page
│   │   │   ├── login/
│   │   │   │   └── +page.svelte               # Login form
│   │   │   └── signup/
│   │   │       └── +page.svelte               # Signup form
│   │   ├── api/                               # SvelteKit server API endpoints
│   │   │   ├── webhook/
│   │   │   │   ├── sanityClient.ts                  # Sanity webhooks (optional)
│   │   │   │   └── stripeCllient.ts                  # Stripe webhooks
│   │   │   └── cart/
│   │   │       └── syncCart.ts                # Cart sync endpoint
│   │   └── auth/
│   │       ├── callback/
│   │       │   └── +server.ts                 # Supabase auth callback route
│   │       └── logout/
│   │           └── +server.ts                 # Logout endpoint
│   ├── app.html                               # HTML template
│   └── app.d.ts                               # SvelteKit global types
├── .env                                       # Environment variables (local)
├── .env.example                               # Environment variable template
├── package.json
├── pnpm-lock.yaml
├── svelte.config.js                           # SvelteKit configuration
├── tailwind.config.js                         # Tailwind CSS configuration
├── tsconfig.json
└── vite.config.ts                             # Vite configuration
```
