import type { GetProp, UploadFile, UploadProps } from 'antd';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const getSessionToken: () => string = () =>
  localStorage.getItem("auth-access") ?? "";

export const updateToken = (access: string, refresh: string) => {
  localStorage.setItem("auth-access", access);
  localStorage.setItem("refresh-access", refresh);
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "";
};

export const getBase64 = (file: FileType): Promise<string> =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = (error) => reject(error);
});
