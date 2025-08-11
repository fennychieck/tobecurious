import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(null, {
    status: 302,
    headers: {
      location: '/non-existing-page1',
    },
  });
};
