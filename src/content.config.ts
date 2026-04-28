import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    description: z.string().max(200),
    repo: z.string().url(),
    install: z.array(z.string()).min(1),
    homepage: z.string().url().optional(),
    docs: z.string().url().optional(),
    pkg: z
      .object({
        registry: z.enum(['pypi', 'npm', 'mcp', 'binary', 'source']),
        name: z.string(),
        url: z.string().url().optional(),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['stable', 'beta', 'experimental', 'archived']).default('beta'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { tools };
