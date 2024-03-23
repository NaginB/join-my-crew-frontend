export interface CreatorDetails {
  username: string;
  instagram: string;
  youtube: string;
  threads: string;
  others: string;
}

export interface UserDetails {
  fullname?: string;
  email?: string;
  role?: string | null;
  socialLinks?: CreatorDetails;
  isApproved?: boolean;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
  loading: boolean;
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

export interface LoginWithGoogleInterface {
  token: string;
}

export interface SignUpInterface {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}

export interface LinkInterface {
  title: string;
  url: string;
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
  title: string;
  url: string;
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

interface UserData {
  fullname: string;
  email: string;
  role: string;
  socialLinks: string[];
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface FeedPosts {
  text: string;
  creator: UserData; // Replace 'any' with appropriate type if known
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
  posts: Post[];
  loading: boolean;
  feed: Feed;
}

export interface UploadedFile {
  name: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}


export interface GoogleUserInfo {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
  jti: string;
}
