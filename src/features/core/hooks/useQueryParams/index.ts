import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { z, ZodTypeAny } from 'zod';

function searchQueryToObj(search: URLSearchParams) {
  const entries = Object.fromEntries(search.entries());
  const obj: Record<PropertyKey, unknown> = {};

  for (const [key, value] of Object.entries(entries)) {
    obj[key] = value;
  }

  return obj;
}

export function useQueryParams<T extends ZodTypeAny>(schema: T) {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo<z.infer<T>>(() => {
    const obj = searchQueryToObj(searchParams);

    return schema.parse(obj);
  }, [schema, searchParams]);

  const setQuery = (newQuery: Partial<z.infer<T>>) => {
    const newObj = {};

    searchParams.forEach((value, key) => {
      // @ts-ignore
      newObj[key] = value;
    });

    setSearchParams(
      // @ts-ignore
      new URLSearchParams({
        ...newObj,
        ...newQuery,
      })
    );
  };

  return [query, setQuery] as const;
}

