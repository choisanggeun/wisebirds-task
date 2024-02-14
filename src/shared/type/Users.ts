export interface Users {
  content: UsersContent[];
  size: number;
  total_elements: number;
  total_pages: number;
}

export interface UsersContent {
  id: number;
  email: string;
  name: string;
  last_login_at: string;
}
