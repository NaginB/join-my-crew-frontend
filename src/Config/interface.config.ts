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

export interface LinkInterface {
  title: string,
  url: string
}

export interface FamousUsers {
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

export interface UserMenu {
  title: string;
  onClick: () => void;
}

export interface SidebarItems {
  id: number;
  icon: React.ReactNode;
  title: string;
  link: string;
  onClick?: () => void;
}

export interface UserMenu {
  title: string;
}

export interface LinkInterface {
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

export interface Modal {
  show: boolean;
  onHide: () => void;
}

export interface Post {
  text: string;
  creator: string;
  files: string[];
  likeCount: string[];
  comments: string[];
  tips: string[];
  isLocked: boolean;
}

export interface File {
  name: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface FeedPosts {
  text: string;
  creator: any; // Replace 'any' with appropriate type if known
  files: File[];
  likeCount: any[]; // Replace 'any' with appropriate type if known
  comments: any[]; // Replace 'any' with appropriate type if known
  tips: string[];
  isLocked: boolean;
  id: string;
}

export interface Feed {
  results: FeedPosts[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}


export interface PostDetails {
  posts: Post[],
  loading: boolean;
  limit: number;
  page: number;
  feed: Feed;
}