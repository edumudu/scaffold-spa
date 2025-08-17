import { z, ZodTypeAny } from 'zod';

/**
 * Will trow an error on development if the schema is invalid but return the value on production
 */
export function safeParseSchema<T extends ZodTypeAny>(
  schema: T,
  value: unknown
): z.infer<T> {
  const safeParse = schema.safeParse(value);

  if (import.meta.env.MODE === 'development') {
    if (safeParse.success) return safeParse.data;

    throw safeParse.error;
  }

  return safeParse.data;
}

