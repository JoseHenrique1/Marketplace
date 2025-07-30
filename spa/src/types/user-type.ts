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

type UserSigninDto = Omit<User, 'password'|'image' | 'id'|'whatsapp'|'city'|'state'>

export type {
  User,
  UserSigninDto
}