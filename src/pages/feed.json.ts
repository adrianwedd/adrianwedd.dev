import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const tools = await getCollection('tools');

  const items = tools
    .filter((t) => t.data.status !== 'archived')
    .map((t) => ({
      id: t.id.replace(/\.md$/, ''),
      name: t.data.name,
      description: t.data.description,
      url: new URL(`/${t.id.replace(/\.md$/, '')}/`, site).toString(),
      repo: t.data.repo,
      homepage: t.data.homepage,
      docs: t.data.docs,
      install: t.data.install,
      pkg: t.data.pkg,
      tags: t.data.tags,
      status: t.data.status,
    }));

  const body = {
    version: '1.0',
    title: 'adrianwedd.dev tools',
    home_page_url: site?.toString(),
    feed_url: new URL('/feed.json', site).toString(),
    description: 'Installable tools by Adrian Wedd.',
    items,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'content-type': 'application/feed+json' },
  });
};
