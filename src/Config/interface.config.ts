export interface UserDetails {
  fullname?: string;
  email?: string;
  role?: string | null;
  socialLinks?: string[];
  isApproved?: boolean;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
}

export interface TokenInfo {
  token: string;
  expires: string;
}

export interface AuthData {
  access: TokenInfo;
  refresh: TokenInfo;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface SignUpInterface {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}

export interface LinkInterface{
  title: string,
  url: string
}

export interface FamousUsers{
  id: number;
  name: string;
  followers: string;
  imageURL: string;
}

export interface SidebarItems {
  id: number;
  icon: React.ReactNode;
  title: string;
  link: string;
  onClick?: () => void;
}

export interface UserMenu{
  title:string;
}

export interface SidebarItems {
  id: number;
  icon: React.ReactNode;
  title: string;
  link: string;
  onClick?: () => void;
}

export interface UserMenu{
  title:string;
}

export interface LinkInterface{
  title: string,
  url: string
}

export interface ResetPasswordInterface {
  newPassword: string;
  confirmPassword: string;
}

export interface ForgotPasswordInterface {
  email: string;
}
