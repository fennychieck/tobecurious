import { redirect } from 'astro/runtime/server'; // Astro v4+

export const prerender = false;

export function GET() {
  return redirect('/non-existing-page1', 302); // Use 301 if you want permanent
}
