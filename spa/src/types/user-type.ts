interface User {
  id: string;
  name: string;
  whatsapp: string;
  city: string;
  state: string;
  image: string | null;
  email: string;
  password: string;
}

type UserSigninDto = Omit<User, 'name' | 'image' | 'id' | 'whatsapp' | 'city' | 'state'>

type UserCreateDto = Omit<User, 'id' | 'image'>

interface Token {
  token: string
}

export type {
  User,
  UserSigninDto,
  UserCreateDto,
  Token
}