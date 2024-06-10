import { forwardRef } from 'react';

interface AuthTextInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  onInput: () => void;
}

const AuthTextInput = forwardRef<HTMLInputElement, AuthTextInputProps>(
  ({ label, type, id, name, onInput }, ref) => {
    return (
      <div className="flex flex-col gap-[2.92px]">
        <label htmlFor={id} className="text-dimgray text-[12px]">{label}</label>
        <input ref={ref} onInput={onInput} type={type} id={id} name={name} className="h-[41px] ring-1 ring-silver rounded-[9px] px-2" />
      </div>
    );
  }
);

AuthTextInput.displayName = 'AuthTextInput';

export default AuthTextInput;

