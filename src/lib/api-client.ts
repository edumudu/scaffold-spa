import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';
import AbortAddon from 'wretch/addons/abort';

import { env } from '~/config/env';

const baseUrl = env.BASE_API_URL;
const headers = new Headers();

headers.set('Accept', 'application/json');

export const http = wretch(baseUrl, {
  headers,
  mode: 'cors',
})
  .addon(QueryStringAddon)
  .addon(AbortAddon());
