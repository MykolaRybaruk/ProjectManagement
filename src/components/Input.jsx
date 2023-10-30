import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const styles =
    "w-full p-1 border-b-2 rounded borer-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase text-stone-500">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={styles} {...props} />
      ) : (
        <input ref={ref} className={styles} {...props} />
      )}
    </p>
  );
});

export default Input;
