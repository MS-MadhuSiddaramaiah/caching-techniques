# Time Zone Clock Dashboard

This project demonstrates different rendering strategies in Next.js 15, including Client-Side Rendering (CSR), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Static Site Generation (SSG).

## Features

- Four different clock components, each using a different rendering strategy
- Edge functions for determining the region and visitor count
- Middleware for adding the user's IP address to request headers
- Responsive design using Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Rendering Strategies

- CSR: Updates every second on the client
- SSR: Fetches time from API on each request
- ISR: Updates every 10 seconds
- SSG: Shows build time

## Edge Functions

The project uses edge functions to determine the region from where the request is served and to increment and retrieve the visitor count.

## Middleware

Middleware is used to attach the user's IP address to the request headers.

## Learn More

To learn more about Next.js and the features used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

