export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  id: number;
  stargazers_count: number;
  watchers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}
