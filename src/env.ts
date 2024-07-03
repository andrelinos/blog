import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']).optional(),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z
    .string()
    .transform((value) => value === 'true')
    .optional(),
  VITE_GITHUB_USER: z.string(),
  VITE_REPO_NAME: z.string(),
})

export const env = envSchema.parse(import.meta.env)
