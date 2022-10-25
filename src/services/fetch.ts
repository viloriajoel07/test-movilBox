import { API_URL } from "../constants/config";

type APIArguments = {
  headers?: HeadersInit;
  body?: Record<string, any>;
  query?: Record<string, any>;
};

const API = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  arg: APIArguments
) => {
  const { query, body, headers } = arg;
  const request: RequestInit = {};

  const requestUrl = `${API_URL}/${url}${
    query ? '?' + new URLSearchParams(query) : ''
  }`;

  if (typeof window === 'undefined' && body) {
    request.body = JSON.stringify(body);
  } else {
    request.body = body instanceof FormData ? body : JSON.stringify(body);
  }

  request.method = method;
  request.headers = {
    'Content-type': 'application/json; charset=UTF-8',
    ...headers,
  } as Record<string, string>;

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    request.headers!.Authorization = `${token}`;
  }

  const response = await fetch(requestUrl, request);

  const isJSON = response.headers
    .get('Content-Type')
    ?.includes('application/json');

  if (isJSON) {
    const parsedResponse = await response.json();

    if (response.ok) {
      return parsedResponse as T;
    } else {
      throw parsedResponse.error;
    }
  }

  throw new Error('BAD_RESPONSE');
};

API.get = <T>(url: string, arg: APIArguments = {}) => API<T>(url, 'GET', arg);
API.post = <T>(url: string, arg: APIArguments = {}) => API<T>(url, 'POST', arg);
API.put = <T>(url: string, arg: APIArguments = {}) => API<T>(url, 'PUT', arg);
API.delete = <T>(url: string, arg: APIArguments = {}) =>
  API<T>(url, 'DELETE', arg);
API.patch = <T>(url: string, arg: APIArguments = {}) =>
  API<T>(url, 'PATCH', arg);

export { API };