import api from "@/lib/api"
import type { CreatePatientPayload, Patient } from "../types/patient.types"

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export const patientsService = {
  getAll: async (): Promise<ApiResponse<Patient[]>> => {
    const { data } = await api.get<ApiResponse<Patient[]>>("/patients")
    return data
  },

  create: async (payload: CreatePatientPayload): Promise<ApiResponse<Patient>> => {
    const { data } = await api.post<ApiResponse<Patient>>("/patients", payload)
    return data
  },

  update: async (id: string, payload: Partial<CreatePatientPayload>): Promise<ApiResponse<Patient>> => {
    const { data } = await api.put<ApiResponse<Patient>>(`/patients/${id}`, payload)
    return data
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    const { data } = await api.delete<ApiResponse<null>>(`/patients/${id}`)
    return data
  },

  searchByDni: async (dni: string) => {
    const { data } = await api.get(`/dni/${dni}`)
    return data
  },
}