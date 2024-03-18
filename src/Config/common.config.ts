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


export const generatePassword = (length: number) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+{}[]<>?";

  // Initialize the password with at least one lowercase letter, one uppercase letter, and one number
  let password = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  // Fill the rest of the password with random characters
  const remainingLength = length - 3; // Subtract 3 because we've already added one lowercase letter, one uppercase letter, and one number
  const charset = lowercaseChars + uppercaseChars + numbers + specialChars;
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Shuffle the characters in the password
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}