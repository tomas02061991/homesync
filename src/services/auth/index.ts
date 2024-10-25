import http from '../api'

const signUp = async (email: string, password: string, first_name: string, last_name: string) => {
  return await http.post('signup', { email, password, first_name, last_name })
}

const login = async (email: string, password: string) => {
  return await http.post('login', { email, password })
}

export default {
  signUp,
  login
}
