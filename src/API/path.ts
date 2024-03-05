const METHODS = {
  POST: 'POST',
  GET: 'GET',
  DELETE: 'DELETE',
}

export const register = { url: '/auth/register', method: METHODS.POST }
export const login = { url: '/auth/login', method: METHODS.POST }
export const resetPassword = { url: '/auth/reset-password', method: METHODS.POST }
export const forgotPassword = { url: '/auth/forgot-password', method: METHODS.POST }