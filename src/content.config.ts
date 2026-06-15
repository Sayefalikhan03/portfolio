import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects are authored as Markdown so cards become content, not hand-written HTML.
// Add a new project by dropping a .md file into src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['live', 'in-progress', 'research']).default('in-progress'),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
