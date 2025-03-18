// app/components/form-error.tsx
import { AiFillExclamationCircle } from "react-icons/ai";

type FormErrorProps = {
  message?: string;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 text-destructive flex items-center gap-x-2 rounded-md p-3 text-sm">
      <AiFillExclamationCircle className="h-4 w-4" />
      {message}
    </div>
  );
};

export default FormError;
