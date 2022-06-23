import { ValidationError } from "yup";

interface Errors {
  [key: string]: string; // não importa o nome "key", poderia ser qualquer coisa.
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error: any) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
