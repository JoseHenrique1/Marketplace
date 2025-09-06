import { api } from "@/config/api"
import type { Token, User, UserSigninDto } from "@/types/user-type"

function getToken() {
  return "token"
}

async function signin (data: UserSigninDto) {
  try {
    const response = await api.post<Token>('/auth/signin', data)
    return response.data.token
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function signup (data: UserSigninDto) {
  try {
    const response = await api.post<{user:User}>('/auth/signup', data)
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getProfile() {
  try {
    const response = await api.get<{user:User}>('/auth/profile')
    
    if (!response || response.status !== 200) throw new Error('Não autorizado');
    
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getUser(email: string) {
  try {
    const response = await api.get<{user:User}>(`/users/${email}`)
    
    if (!response || response.status !== 200) throw new Error('Não autorizado');
    
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export {
  getToken,
  signin,
  signup,
  getUser,
  getProfile
}