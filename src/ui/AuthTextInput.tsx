export default function AuthTextInput({ label, type, id, name, ref, onInput }: { label: string, type: string, id: string, name: string, ref: React.RefObject<HTMLInputElement>, onInput: () => void }) {
  return (
    <div className="flex flex-col gap-[2.92px]">
      <label htmlFor={id} className="text-dimgray text-[12px]">{label}</label>
      <input ref={ref} onInput={onInput} type={type} id={id} name={name} className="h-[41px] ring-1 ring-silver rounded-[9px] px-2" />
    </div>
  );
}
