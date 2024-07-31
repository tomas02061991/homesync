import http from '../api'

const signUp = async (email: string, password: string) => {
  return await http.post('signup', { email, password })
}

const login = async (email: string, password: string) => {
  return await http.post('login', { email, password })
}

export default {
  signUp,
  login
}
