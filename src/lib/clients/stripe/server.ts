import Stripe from 'stripe'
import {PRIVATE_STRIPE_SECRET_KEY} from "$lib/utils/env";

// Import from environment directly rather than using $env
// The STRIPE_SECRET_KEY should be picked up from the .env file

// Add fallback and error handling
const stripeSecretKey = PRIVATE_STRIPE_SECRET_KEY|| ''
if (!stripeSecretKey) {
  console.error('Missing Stripe secret key in environment variables')
}

// Initialize Stripe with better error handling
let stripe: Stripe | null = null

try {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2023-10-16' // Using a valid Stripe API version
  })
} catch (error) {
  console.error('Failed to initialize Stripe:', error)
}

export { stripe }
