export type ResponseType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

export type Credentials = 'include' | 'omit' | 'same-origin'

export interface RequestConfig {
    method?: ResponseType;
    headers?: Record<string, string>;
    body?: string;
    credentials?: Credentials;
}