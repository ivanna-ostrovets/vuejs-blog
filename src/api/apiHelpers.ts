const defaultHeaders = { 'Content-Type': 'application/json' };

interface ApiFetchProps {
  url: string;
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  headers?: HeadersInit;
  body?: string;
}

const BASE_URL = 'https://dummyjson.com';

export async function apiFetch<T>({
  url,
  method = 'GET',
  headers = defaultHeaders,
  body,
}: ApiFetchProps): Promise<T | { error: string }> {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body,
  })
    .then(async response => {
      const json = await response.json();

      if (response.ok) return json;

      if (json.message) return { error: json.message };

      return { error: 'Something Went Wrong!' };
    })
    .catch(error => ({ error }));
}
