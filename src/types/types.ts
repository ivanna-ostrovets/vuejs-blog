export interface ApiError {
  message: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string;
  reactions: string;
  image: string;
}
