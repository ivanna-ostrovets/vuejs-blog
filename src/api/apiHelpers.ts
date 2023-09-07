import { stripHtml } from 'string-strip-html';
import type { Ref } from 'vue';

import type { ApiError } from '@/types/types';

interface ApiFetchProps {
  url: string;
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  headers?: HeadersInit;
  body?: string;
}

export async function useApiFetch<T>({
  onSuccess,
  errorRef,
  ...props
}: ApiFetchProps & { onSuccess: (value: T) => void; errorRef: Ref<string> }) {
  const response = await apiFetch<T>(props);

  if (instanceOfError(response)) {
    errorRef.value = response.message;
  } else {
    return onSuccess(response);
  }
}

const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };
const BASE_URL = 'https://dummyjson.com';

export async function apiFetch<T>({
  url,
  method = 'GET',
  headers = DEFAULT_HEADERS,
  body,
}: ApiFetchProps): Promise<T | ApiError> {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body,
  })
    .then(parseResponse)
    .then(async response => {
      if (response.message) return { message: response.message };

      return response;
    })
    .catch(error => ({ message: stripHtml(error.message).result.replace('Error', '').trim() }));
}

const parseResponse = async (response: Response) => {
  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(text);
  }
};

export function instanceOfError(object: any): object is ApiError {
  return 'message' in object;
}
