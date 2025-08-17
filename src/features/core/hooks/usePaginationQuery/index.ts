import { z } from 'zod';
import { useQueryParams } from '../useQueryParams';

const paginationSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  limit: z.coerce.number().int().positive().catch(20),
});

export function usePaginationQuery() {
  const [query, setQuery] = useQueryParams(paginationSchema);

  return [query, setQuery] as const;
}

