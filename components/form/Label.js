export function Label({ children, className, ...props }) {
  return (
    <label className={`mb-2 font-fifteen font-500 ${className}`} {...props}>
      {children}
    </label>
  );
}
