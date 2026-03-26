export interface Network {
  address: string;
  label: string;
}

export interface Donation {
  id: string;
  symbol: string;
  name: string;
  networks?: { [key: string]: Network };
  address?: string;
  logo: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  createdAt: string;
}
