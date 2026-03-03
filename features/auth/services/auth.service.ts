import api from "@/lib/api"
import type { Role } from "@/types/roles.types"

interface LoginPayload {
  email: string
  password: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export interface LoginData {
  accessToken: string
  refreshToken: string
  user: {
    id: string
    email: string
    role: Role  
  }
}

export const authService = {
  login: async (payload: LoginPayload): Promise<ApiResponse<LoginData>> => {
    const { data } = await api.post<ApiResponse<LoginData>>("/auth/login", payload)
    return data
  },
}