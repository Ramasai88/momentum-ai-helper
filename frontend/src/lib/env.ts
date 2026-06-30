/**
 * Typed access to Vite environment variables.
 * All variables must be prefixed with VITE_ to be exposed to the client.
 */
export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string,
  appName: import.meta.env.VITE_APP_NAME as string,
} as const
