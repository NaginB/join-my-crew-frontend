export const getSessionToken: () => string = () => localStorage.getItem('auth-access') ?? '';


export const updateToken = (access: string, refresh: string) => {
  localStorage.setItem('auth-access', access);
  localStorage.setItem('refresh-access', refresh);
}