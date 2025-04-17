const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
    const baseClasses = 'rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    };
    
    const variantClasses = {
      primary: 'bg-unix-primary text-white hover:bg-blue-600 focus:ring-blue-500',
      secondary: 'bg-unix-secondary text-white hover:bg-emerald-600 focus:ring-emerald-500',
      outline: 'border border-unix-primary text-unix-primary hover:bg-blue-50 focus:ring-blue-500',
      dark: 'bg-unix-dark text-white hover:bg-gray-800 focus:ring-gray-500',
      'outline-white': 'border border-white text-white hover:bg-white/10',

    };
  
    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;