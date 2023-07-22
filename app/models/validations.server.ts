const isValidEmail = (email: string) => {
  return email && email.includes("@");
};

const isValidPassword = (password: string) => {
  return password && password.trim().length >= 7;
};

interface Credentials {
  email: string;
  password: string;
}

export interface CredentialsValidationErrors {
  email?: string;
  password?: string;
}

export const validateCredentials = ({ email, password }: Credentials) => {
  let validationErrors: CredentialsValidationErrors = {};

  if (!isValidEmail(email)) {
    validationErrors.email = "Invalid email address.";
  }

  if (!isValidPassword(password)) {
    validationErrors.password =
      "Invalid password. Must be at least 7 characters long.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
};
