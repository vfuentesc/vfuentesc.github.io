import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Columnas (El Comercio / Gestión) migradas con su frontmatter original.
const columnas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/columnas" }),
  schema: z.object({
    titulo: z.string(),
    autor: z.string().default("Víctor Fuentes Campos"),
    fecha: z.coerce.date(),
    medio: z.string(),
    tema: z.string().optional(),
    subtema: z.string().optional(),
    palabras: z.coerce.number().optional(),
    tono: z.string().optional(),
    analogia_principal: z.string().optional(),
    estado: z.string().default("publicado"),
  }),
});

export const collections = { columnas };
