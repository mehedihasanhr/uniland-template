export function FormGroup({ children, className, ...props }) {
  return (
    <div className={`mb-20 ${className}`} {...props}>
      {children}
    </div>
  );
}
