export type Token = {
  token: string
}

export type User = {
  id: string
  email: string
  aud: string
  meta_data: Record<string, string>
}
