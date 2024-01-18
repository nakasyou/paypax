// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { PayPayStatus } from './status/index.ts'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Anyone = any

export type baseHeader = {
  Accept: string
  'User-Agent': string
  'Content-Type': string
}

export type loginResultStatus = keyof typeof PayPayStatus

export type loginResult = {
  success: boolean
  // { a:1, b:2 } => a|b
  status: loginResultStatus
}

export type OTP = {
  waiting: boolean
  otp_prefix: string
  otp_ref_id: string
}

export type LoginContext = {
  uuid?: string
  token?: string
}

export type CreateLinkContext = {
  androidMinimumVersion: string;
  requestId: string;
  requestAt: string;
  theme: string;
  amount: number;
  iosMinimumVersion: string;
  passcode?: string;
}

export type FetchContext = {
  method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT'
  body?: string
}

export type ResponseBody = Anyone & {}

export type ResponseFail = {
  success: false
  status: string
}

export type ResponseBalance = {
  success: true
  total: number
  currency: 'JPY' | string
  updated_at: string
  raw: {
    header: {
      resultCode: string
      resultMessage: string
    }
    payload: {
      [key: string]: Anyone
    }
  }
}

export type ResponseUserInfo = {
  success: true
  id: number
  user_id: string
  state: string
  first_name: string
  last_name: string
  display_name: string
  icon_url: string
  phone_number: string
  email: string
  date_of_birth: string
  raw: {
    header: {
      resultCode: string
      resultMessage: string
    }
    payload: {
      [key: string]: Anyone
    }
  }
}

export type ResponseCreateLink = {
  success: true
  orderId: string
  orderStatus: 'PENDING'
  link: string
  transactionAt: string
  expiry: string
  raw: {
    header: {
      resultCode: string
      resultMessage: string
    }
    payload: {
      [key: string]: string
    }
  }
}
