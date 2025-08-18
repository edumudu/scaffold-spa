import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';
import AbortAddon from 'wretch/addons/abort';

const baseUrl = import.meta.env.VITE_BASE_API_URL;
const headers = new Headers();

headers.set('Accept', 'application/json');

export const http = wretch(baseUrl, {
  headers,
  mode: 'cors',
})
  .addon(QueryStringAddon)
  .addon(AbortAddon());
