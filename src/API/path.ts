const METHODS = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export const register = { url: "/auth/register", method: METHODS.POST };

export const login = { url: "/auth/login", method: METHODS.POST };

export const authGooglelogin = { url: "/auth/google-auth", method: METHODS.POST };

export const resetPassword = {
  url: "/auth/reset-password/{{token}}",
  method: METHODS.POST,
};

export const forgotPassword = {
  url: "/auth/forgot-password",
  method: METHODS.POST,
};

export const createPost = { url: "/posts/createFeed", method: METHODS.POST };

export const myFeed = {
  url: "/posts/queryPostsWithPagination",
  method: METHODS.GET,
};

export const exploreList = {
  url: `/users/queryUsersWithPagination?role=${process.env.REACT_APP_CREATOR_ROLE_ID}`,
  method: METHODS.GET,
};

export const updateUser = { url: "/users/{{id}}", method: METHODS.PATCH };

export const userDetails = { url: "/users", method: METHODS.GET };

export const fileUpload = { url: "/files/upload", method: METHODS.POST };
