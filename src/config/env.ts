import * as z from 'zod';

const envSchema = z.object({
  BASE_API_URL: z.string(),
  // eslint-disable-next-line unicorn/prefer-top-level-await
  ALLOWED_HOSTS: z.string().array().catch([]),
});

function createEnv() {
  const envEntries = Object.entries(import.meta.env);
  const envVars: Record<string, string> = {};

  for (const [key, value] of envEntries) {
    if (key.startsWith('VITE_')) {
      envVars[key.replace('VITE_', '')] = value;
    }
  }

  const parsedEnv = envSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    const variables = Object.entries(parsedEnv.error.flatten().fieldErrors)
      .map(([key, value]) => `- ${key}: ${value}`)
      .join('\n');

    throw new Error(
      `Invalid env provided. The following variables are missing or invalid: ${variables}`
    );
  }

  return parsedEnv.data;
}

export const env = createEnv();
