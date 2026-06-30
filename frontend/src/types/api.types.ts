/**
 * Shared application-level types.
 * Domain-specific types should live in their own files within this folder.
 */

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}
