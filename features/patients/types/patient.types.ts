export type Gender = "MALE" | "FEMALE"

export type BloodType =
  | "A_POSITIVE" | "A_NEGATIVE"
  | "B_POSITIVE" | "B_NEGATIVE"
  | "O_POSITIVE" | "O_NEGATIVE"
  | "AB_POSITIVE" | "AB_NEGATIVE"

export interface Patient {
  id: string
  firstName: string
  lastName: string
  fullName: string
  dni: string
  email: string
  phone: string
  birthDate: string
  gender: Gender
  bloodType: BloodType
  address: string
  district: string
  city: string
  insuranceName?: string
  insuranceCode?: string
  allergies?: string
  observations?: string
  isActive: boolean
  createdAt: string
}

export interface CreatePatientPayload {
  firstName: string
  lastName: string
  dni: string
  email: string
  phone: string
  birthDate: string
  gender: Gender
  bloodType: BloodType
  address: string
  district: string
  city: string
  insuranceName?: string
  insuranceCode?: string
  allergies?: string
  observations?: string
}