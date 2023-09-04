const defaultHeaders = { 'Content-Type': 'application/json' };

interface ApiFetchProps {
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  headers?: HeadersInit;
  body?: string;
}

export async function apiFetch<T>({
  method = 'GET',
  headers = defaultHeaders,
  body,
}: ApiFetchProps): Promise<T | { error: string }> {
  return fetch('https://dummyjson.com/auth/login', {
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
